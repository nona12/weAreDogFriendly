'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var hotelSchema = Schema({
    name: String,
    type: String,
    direccion: String,
    phone: String,
    city: String,

})
// exportamos el modelo
module.exports = mongoose.model('Hotel', hotelSchema)