const Order = require("./orders.schema.js");
const User = require("../user/user.schema.js");
const Restaurant = require("../restaurant/restaurant.schema.js");
const Item = require("../item/item.schema.js");
const paystack = require("paystack")(process.env.PAYSTACKSECRET_KEY);

const createOrder = async (req, res) => {
  try {
    const {
      orderId,
      orderedItems,
      restaurant,
      paymentMethod,
      paymentReference,
      paystackAccessCode,
      deliveryPhone,
      deliveryAddress,
    } = req.body;

    const owner = req.userData?.userId;

    // ---------- BASIC VALIDATION ----------
    if (!owner) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    if (
      !orderId ||
      !restaurant ||
      !Array.isArray(orderedItems) ||
      orderedItems.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message:
          "orderId, restaurant, and orderedItems are required (orderedItems cannot be empty).",
      });
    }

    const verifyUser = await User.findById(owner);
    if (!verifyUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const verifyRestaurant = await Restaurant.findById(restaurant);
    if (!verifyRestaurant) {
      return res
        .status(404)
        .json({ success: false, message: "Restaurant not found." });
    }

    // ---------- FETCH ALL ITEMS (ONE QUERY) ----------
    const itemIds = orderedItems.map((i) => i.itemId);

    const itemsFromDB = await Item.find({
      _id: { $in: itemIds },
    });

    // Ensure all items exist
    if (itemsFromDB.length !== orderedItems.length) {
      return res.status(404).json({
        success: false,
        message: "One or more items were not found.",
      });
    }

    // ---------- CREATE FAST LOOKUP MAP ----------
    const itemMap = new Map();
    itemsFromDB.forEach((item) => {
      itemMap.set(String(item._id), item);
    });

    // ---------- BUILD TRUSTED ORDER ITEMS ----------
    const normalizedItems = [];

    for (const reqItem of orderedItems) {
      const itemFromDB = itemMap.get(String(reqItem.itemId));

      if (!itemFromDB) {
        return res.status(404).json({
          success: false,
          message: `Item not found: ${reqItem.itemId}`,
        });
      }

      const qty = Number(reqItem.qty ?? 1);

      if (!Number.isFinite(qty) || qty < 1) {
        return res.status(400).json({
          success: false,
          message: "Quantity must be at least 1.",
        });
      }

      // Ensure item belongs to restaurant
      if (String(itemFromDB.restaurant) !== String(restaurant)) {
        return res.status(400).json({
          success: false,
          message: `Item (${itemFromDB.item_name}) does not belong to this restaurant.`,
        });
      }

      const price = Number(itemFromDB.price);

      normalizedItems.push({
        itemId: itemFromDB._id,
        name: itemFromDB.item_name,
        price,
        qty,
        totalItemPrice: price * qty,
      });
    }

    // ---------- TOTAL PRICE ----------
    const totalPrice = normalizedItems.reduce(
      (sum, i) => sum + i.totalItemPrice,
      0,
    );

    // ---------- CREATE ORDER ----------
    const newOrder = await Order.create({
      orderId,
      owner,
      restaurant,
      orderedItems: normalizedItems,
      totalPrice,
      paymentMethod,
      paymentReference,
      paystackAccessCode,
      deliveryPhone,
      deliveryAddress,
    });

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: newOrder,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

const initializePayment = async (req, res) => {
  try {
    const owner = req.userData.userId;
    const email = req.userData.email;
    const { deliveryAddress, deliveryPhone, orderId } = req.body;
    console.log("Initializing payment for user:", {
      owner,
      email,
      deliveryAddress,
      deliveryPhone,

    }); // ✓ Show in console

    if (!owner || !email || !deliveryAddress || !deliveryPhone) {
      return res
        .status(400)
        .json({
          success: false,
          message:
            "Missing required fields: owner, email, deliveryAddress, deliveryPhone",
        });
    }

    const orderedItems = await Order.findOne({ owner, _id: orderId });
    if (!orderedItems) {
      return res
        .status(404)
        .json({ success: false, message: "No order found for this user" });
    }

    if (!orderedItems.orderedItems || orderedItems.orderedItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No items in the order to initialize payment",
      });
    }
    orderedItems.deliveryAddress = deliveryAddress;
    orderedItems.deliveryPhone = deliveryPhone;

    const reference = `food-order_${orderedItems.owner}_${Date.now()}`;

    const paymentData = {
      email: email,
      amount: Math.round(orderedItems.totalPrice * 100), // Convert to kobo
      currency: "NGN",
      reference: reference,
      metadata: {
        owner: orderedItems.owner,
      },
    };
    const paystackResponse = await paystack.transaction.initialize(paymentData);
    if (paystackResponse.status) {
      orderedItems.paystackAccessCode = paystackResponse.data.access_code;
      orderedItems.paymentReference = reference;
      await orderedItems.save();
      return res.status(200).json({
        success: true,
        message: "Payment initialized successfully",
        data: {
          accessCode: paystackResponse.data.access_code,
          reference: reference,
          authorizationUrl: paystackResponse.data.authorization_url,
          amount: orderedItems.totalPrice,
        },
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to initialize payment with Paystack",
        error: paystackResponse.message,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

module.exports = { createOrder, initializePayment };
