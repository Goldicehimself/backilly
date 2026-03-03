const express = require('express');

const restaurantSchema = require('./restaurant.schema.js');

const registerRestaurant = async (req, res) => {
    const { name, email, address, phone, type } = req.body;
    const owner = req.userData.userId;
    console.log('Registering restaurant with data:', { name, email, address, phone, type });
       const verifyAddress = await restaurantSchema.findOne({address: address});
       if(verifyAddress) {
        return res.status(400).json({message: "Restaurant with this address already exists"});
       };
       const newRestaurant = new restaurantSchema({ name, owner, email, address, phone, type });
    try {
        await newRestaurant.save()
        .then((response) => {
            console.log(response);
            return res.status(201).json({ success: true, message: 'Restaurant registered successfully', data: response });
        })
    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
module.exports = { registerRestaurant };