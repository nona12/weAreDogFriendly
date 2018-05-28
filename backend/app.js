'use strict'
var express = require('express');
var bodyParser = require("body-parser");

var app = express();
//como añado otra ruta a la api?? ----var api = require('./routes/bar')
var api = require('./routes/hotel')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use( '/api', api)

module.exports = app
