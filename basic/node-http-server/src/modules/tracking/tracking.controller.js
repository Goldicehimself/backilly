const QRCode = require("qrcode");
const ordersSchema = require("../order/orders.schema");


const generateQcode = async (req, res) => {
    try {
        const { orderId } = req.body;
        if (!orderId) {
            return res.status(400).json({ error: "orderId is required" });
        }
        const mongoose = require("mongoose");
        const order = mongoose.Types.ObjectId.isValid(orderId)
            ? await ordersSchema.findById(orderId)
            : await ordersSchema.findOne({ orderId });
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        const trackingUrl = `${req.protocol}://${req.get('host')}/api/v1/tracking/track/${orderId}`;
        
        const qrCodeData = await QRCode.toDataURL(trackingUrl);
        res.json({ success: true, orderId, trackingUrl,
            qrCode: qrCodeData });
    } catch (error) {
       console.error("generateQcode error:", error);
       return res.status(500).json({ error: 'Internal server error' }); 
    }
};

const serveTrackingInfo = async (req, res) => {
    const orderId = req.params.id;
    const mongoose = require("mongoose");
    const order = mongoose.Types.ObjectId.isValid(orderId)
        ? await ordersSchema.findById(orderId)
        : await ordersSchema.findOne({ orderId });
    if (!order) {
        return res.status(404).send(`<h4>Order not found</h4><p>pls check your tracking Id and try again</p>`);
    }
    const items = Array.isArray(order.orderedItems) ? order.orderedItems : [];
    const deliveryInfoParts = [];
    if (order.deliveryAddress) {
        deliveryInfoParts.push(order.deliveryAddress);
    }
    if (order.deliveryPhone) {
        deliveryInfoParts.push(order.deliveryPhone);
    }
    res.render("track", {
        orderId: order.orderId || order._id,
        status: order.deliveryStatus || "pending",
        items,
        deliveryInfo: deliveryInfoParts.join(" | ") || "N/A",
    });
}



module.exports = {
    generateQcode,
    serveTrackingInfo,
};
