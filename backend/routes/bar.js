'use strict'
var express = require('express')
var BarController = require('../controllers/bar')
var api = express.Router();
api.get('/bares/:nombreBar?', BarController.bares);
module.exports = api