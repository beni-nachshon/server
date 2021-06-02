const express = require('express');
const userController = require('./userController.js')

var RoutesCreate = express.Router();
RoutesCreate.post("/create",userController.create);

module.exports = RoutesCreate;