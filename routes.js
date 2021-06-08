const express = require('express');
const userController = require('./userController.js')

var userRoutes = express.Router();

userRoutes.get("/getAll",userController.getAll);
userRoutes.get("/:id",userController.getOne);
userRoutes.put("/:id",userController. updateUser);

module.exports = userRoutes;