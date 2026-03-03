const express = require('express');

const ordersRouter = express.Router();

const { createOrder, initializePayment } = require('./orders.controller.js');
const validateUser = require('../middleware/validate_user.js');

ordersRouter.route('/createOrder').post(validateUser,   createOrder);
ordersRouter.route('/initializePayment').post(validateUser,   initializePayment);

module.exports = { ordersRouter };