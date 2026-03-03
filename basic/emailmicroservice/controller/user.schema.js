const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, 
    required: true,
    trim: true,
    minlength: [3, "Name must be at least 3 characters long"] },
    email: { type: String, 
    required: true,
    unique: true,
      trim: true},
    password: { type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"],
    trim: true
    }
},{ timestamps: true }); 
module.exports = mongoose.model('User', userSchema);