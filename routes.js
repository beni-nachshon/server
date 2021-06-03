const express = require('express');
const userController = require('./userController.js')

var userRoutes = express.Router();

userRoutes.put("/:_id",userController. updateUser);
userRoutes.get("/getAll",userController.getAll);
userRoutes.get("/:id",userController.getOne);

module.exports = userRoutes;