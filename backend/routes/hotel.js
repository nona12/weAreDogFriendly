'use strict'
var multer = require("multer");
var express = require('express')
var HotelController = require('../controllers/hotel')
var api = express.Router();
var uploader = multer({dest: "./uploads"});
var middleware_upload = uploader.single('photo');

api.get('/hotel/:id', HotelController.getHotel);
api.get('/hotels/', middleware_upload,HotelController.getHotels);
api.post('/hotel/', HotelController.saveHotel);
api.put('/hotel/:id', HotelController.updateHotel);
api.delete ('/hotel/:id', HotelController.deleteHotel);
module.exports = api