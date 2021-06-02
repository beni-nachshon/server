const express = require('express');
const crypto = require('./crypt.js');
const userModel  = require('./userSchema.js');
const token1 = require('./userToken.js');

var loginRoutes = express.Router();

loginRoutes.post("/login",function(req,res){
    console.log("login work");
    userModel.findOne(
       { id : req.body.id},{password : 1,_id : 1, role : 1},function(err,doc){
           
           if(err){
               return res.send("eeeee");
           }
       var compare = crypto.compare(req.body.password,doc.password)
           if (!compare ){
            return res.send(compare);
           }
           var token = new token1(true,null,doc.name,doc._id,doc.role); 
         
           return res.send(token );
       }
    )
})
module.exports = loginRoutes;