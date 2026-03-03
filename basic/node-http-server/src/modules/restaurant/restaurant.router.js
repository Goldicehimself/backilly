const express = require('express');
const { registerRestaurant } = require('./restaurant.controller.js');
const validateUser = require('../middleware/validate_user.js');

const restaurantRouter = express.Router();

restaurantRouter.route('/registerRestaurant').post(validateUser,  registerRestaurant);

module.exports = { restaurantRouter };