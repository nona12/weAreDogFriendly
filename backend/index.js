'use strict'
var mongoose = require('mongoose');
var app = require('./app')
var port = process.env.PORT || 3678

mongoose.connect('mongodb://localhost:27017/hotels', (err, res) => {

    if (err) {
        throw err;
    } else {
        console.log('Conexión a mongodb correcta.')
        app.listen(port, () => {
            console.log("API REST funcionando en http://localhost:" + port);
        });
    }
});