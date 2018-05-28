'use strict'
var express = require('express')
var HotelController = require('../controllers/hotel')
var api = express.Router();
api.get('/hotel/:id', HotelController.getHotel);
api.get('/hotels/', HotelController.getHotels);
api.post('/hotel/', HotelController.saveHotel);
api.put('/hotel/:id', HotelController.updateHotel);
api.delete ('/hotel/:id', HotelController.deleteHotel);
module.exports = api