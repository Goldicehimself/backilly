const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
    name: { type: String, 
    required: true, 
    trim: true,
    minlength: [3, "Name must be at least 3 characters long"] },

owner: { type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true },


    email: { type: String,
    required: true,
    unique: true,
      trim: true},


      address: { type: String,
      required: true,
      trim: true},


    phone: { type: String,
    unique: true,
    minlength: [11, "Phone number must be at least 11 digits long"],
    maxlength: [14, "Phone number cannot exceed 14 digits"],
    trim: true
    },
    type : { type: String,
      enum: ['bukka', 'take-away', 'food-truck', 'cafe', 'buffet'],
      default: 'take-away',
    trim: true
    }
},{ timestamps: true }); 
module.exports = mongoose.model('Restaurant', restaurantSchema);