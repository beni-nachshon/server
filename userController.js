const userSchema = require("./userSchema.js");
const express = require('express');
const crypto = require('./crypt.js');
const Token2 = require ('./userToken.js');

function userController(){
    function create(req,res ){
        
        if (! req.body.name || ! req.body.password){
            return res.status(400).send({});
        }
        
           
            req.body.password = crypto.cryptPassword(req.body.password);
           

        var newUser = new userSchema(req.body);
        newUser.save(function(err,newDoc){
            if (err){
               
                return res.status(500).send({});
            }
           
             var token = new Token2(true,null,req.body.name,newDoc._id,req.body.role); 
             
            res.status(201).send(token);
           
        }
        )
    }
    function updateUser(req,res){
//         console.log( req.body.header);
//    var   usertoken = new userToken(false, req.body.header)
//    console.log(usertoken.isNotexpired());
//    console.log(usertoken.expirationTime);
//    console.log(Date.now());
//         if (usertoken.isNotexpired()== false){
//             console.log("token is not ok");
            
           
//             return res.status(401).send({})
            
//         }
//   console.log("token ok");
        userSchema.updateOne({_id:req.params._id},{$set:req.body},function(err,result){
            return res.send({err: err,result : result})
        })
    
    }
    function   getOne(req,res){
        // req.params.id *=  1;
        //
        console.log("");

        userSchema.findOne({id:req.params.id},function(err,user){
            return res.send({err:err,user:user})
        })
    }
    return {
        create : create,
        updateUser :  updateUser,
        getOne : getOne

    }
}
module.exports = userController();