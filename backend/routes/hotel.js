'use strict'
var express = require('express')
var HotelController = require('../controllers/hotel')
var api = express.Router();
api.get('/hoteles/:nombreHotel?', HotelController.hoteles);
module.exports = api