const express = require('express');
const { registeredUser, findOneUser, login } = require('./user.controller.js');
const validateUser = require('../middleware/validate_user.js');

const userRouter = express.Router();

userRouter.route('/createUser').post(registeredUser);
userRouter.route('/findone-user').get(validateUser,findOneUser);
userRouter.route('/login').post(login);

module.exports = {userRouter};