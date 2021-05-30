const express = require('express');
const crypto = require('./crypt.js');
const userModel  = require('./userSchema.js')

var loginRoutes = express.Router();

loginRoutes.post("/login",function(req,res){
    console.log("login work");
    userModel.findOne(
       { id : req.body.id},{password : 1},function(err,doc){
           console.log(doc);
           if(err){
               return res.send("eeeee");
           }
           return res.send( crypto.compare(req.body.password,doc.password));
       }
    )
})
module.exports = loginRoutes;