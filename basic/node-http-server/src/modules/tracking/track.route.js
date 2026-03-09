const express = require('express');
const { generateQcode, serveTrackingInfo } = require('./tracking.controller.js');

const trackRouter = express.Router();

trackRouter.route('/track-order').post(generateQcode);

trackRouter.route('/track/:id').get(serveTrackingInfo);

module.exports = {trackRouter};