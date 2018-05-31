'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var hotelSchema = Schema({
    name: String,
    photo:String,
    type: String,
    direccion: String,
    phone: String,
    city: String,
    province:String,
    web:String,
    email:String,
    price:String,
    description:String,
    punctuation:Number,

})
// exportamos el modelo
module.exports = mongoose.model('Hotel', hotelSchema)