'use strict'
var express = require('express');
var bodyParser = require("body-parser");

var app = express();
//como añado otra ruta a la api?? ----var api = require('./routes/bar')
var api = require('./routes/hotel')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// middleware
app.use((req, res, next) => {
    //permitimos que las peticiones se puedan hacer desde cualquier sitio
    res.header('Access-Control-Allow-Origin', '*')
    //res.header('Access-Control-Allow-Origin', '192.168.0.11')
    // configuramos las cabeceras que pueden llegar
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
    // configuramos los métodos que nos pueden llegar
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next(); // para que se salga de esta función 
})




app.use('/api', api)

module.exports = app
