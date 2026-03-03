const express = require('express');

const itemSchema = require('./item.schema.js');
const restaurantSchema = require('../restaurant/restaurant.schema.js');


const createItem = async (req, res) => {
  const { item_name, description, price, unit, restaurant } = req.body;
  const image= req.file.filename;
    console.log('Received file:', image);
    console.log('Creating item with data:', { item_name, description, price, unit, restaurant });

    const verifyRestaurant = await restaurantSchema.findOne({ owner: req.userData.userId });
    try {
    if(!verifyRestaurant) {
      return res.status(400).json({ success: false, message: "Invalid restaurant ID" });
    };

    if(!item_name || !description || !price || !unit ) {
      return res.status(400).json({ success: false, message: "All filed required" });
    };


    const newItem = new itemSchema({ item_name, description, price, unit, restaurant: verifyRestaurant._id, imageURL: image });
    newItem.save()
    .then((response) => {
        console.log(response);
        return res.status(201).json({ success: true, message: 'Item created successfully', data: response });
    })
    .catch((error) => {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    });} catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const findOneItem = async (req, res) => {
    const { restaurant } = req.body;
    try {
        const item = await restaurantSchema.findOne({ _id: restaurant });
        if (!item) {
            return res.status(404).json({ success: false, message: 'Item not found' });
        }
        return res.status(200).json({ success: true, message: 'Item found', data: item });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = { createItem, findOneItem };
