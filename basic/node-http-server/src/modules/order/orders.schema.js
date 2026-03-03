const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    orderId: { type: String, required: true, unique: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    orderedItems: [
        {
          itemId: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
          name: { type: String, required: true },
          qty: { type: Number,
            default: 1,
             min: [1, "Quantity must be at least 1"] },
             status: { type: String,
               enum: ['pending', 'preparing', 'ready', 'in-transit', 'delivered', 'cancelled'], 
               default: 'pending' },
               price: { type: Number, required: true },
               totalItemPrice: { type: Number, required: true },
        }
    ],
      totalPrice: { type: Number,  },
      paymentMethod: { type: String, enum: ['cash', 'card', 'online'], 
        default: 'card', },

        deliveryAddress: { type: String, 
          minlength: [10, "Delivery address must be at least 10 characters long"], 
         },
         deliveryPhone: { type: String,
          minleength: 11,
          maxlength: 15,
          required: true,
           },
         deliveryStatus: { type: String, enum: ['pending', 'out-for-delivery', 'delivered', 'cancelled'], 
          default: 'pending', },

        paidAt: { type: Date,  },
        isPaid: { type: Boolean, default: false },

        paymentReference: { type: String,  },
        paystackAccessCode: { type: String,  },
        paymentStatus: { type: String, enum: ['unpaid', 'paid', 'failed', 'cancelled'], 
          default: 'unpaid', },
      
  },{ timestamps: true }
);


module.exports = mongoose.model('Order', orderSchema);

