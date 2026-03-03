const express = require('express');
const { createItem, findOneItem } = require('./item.controller.js');
const validateUser = require('../middleware/validate_user.js');
const { uploadSingle } = require('../../../multer/multer.js');
const itemRouter = express.Router();


itemRouter.route('/createItem').post(validateUser, uploadSingle ,createItem);
itemRouter.route('/findOneItem').get(validateUser, findOneItem);
module.exports = { itemRouter };
