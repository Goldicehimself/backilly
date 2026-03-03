const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    item_name: { type: String, required: true, trim: true,
        minlength: [3, "Item name must be at least 3 characters long"] },
    
    description: { type: String, 
        trim: true,
        minlength: [10, "Description must be at least 10 characters long"],
    },
    price: { type: Number, 
        required: true, 
        min: 100 },
    unit: { type: String, 
        required: true, 
        trim: true,    },

     restaurant: { type: Schema.Types.ObjectId,   
        ref: 'Restaurant',
        trim: true,
    },
    imageURL: { type: String,
        trim: true,
    },
},{ timestamps: true });
module.exports = mongoose.model('Item', itemSchema);