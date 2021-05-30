const userSchema = require("./userSchema.js");
const express = require('express');
const crypto = require('./crypt.js');

function userController(){
    function create(req,res ){
        if (! req.body.name){
            return res.status(400).send({});
        }
        var newUser = new userSchema(req.body);
        newUser.save(function(err,newDoc){
            if (err){
               
                return res.status(500).send({});
            }
            res.status(201).send(newDoc);
        }
        )
    }
    function updateUser(req,res){
        console.log(req.body);
       if (req.body.password ) {
           
        req.body.password = crypto.cryptPassword(req.body.password)
    };
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