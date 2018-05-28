'use strict'
var express = require('express')
var BarController = require('../controllers/bar')
var api = express.Router();

api.get('/bar/:id', BarController.getBar);
api.get('/bars/', BarController.getBars);
api.post('/bar/', BarController.saveBar);
api.put('/bar/:id', BarController.updateBar);
api.delete('/bar/:id', BarController.deleteBar);
module.exports = api