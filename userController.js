const userSchema = require("./userSchema.js");
const express = require('express');
const crypto = require('./crypt.js');
const Token2 = require('./userToken.js');

function userController() {
    function create(req, res) {

        if (!req.body.name || !req.body.password) {
            return res.status(400).send({});
        }


        req.body.password = crypto.cryptPassword(req.body.password);


        var newUser = new userSchema(req.body);
        newUser.save(function (err, newDoc) {
            if (err) {

                return res.status(500).send({});
            }

            var token = new Token2(true, null, req.body.name, newDoc._id, req.body.role);

            res.status(201).send(token);

        }
        )
    }
    function updateUser(req, res) {

        userSchema.updateOne({ _id: req.params._id }, { $set: req.body }, function (err, result) {
            return res.send({ err: err, result: result })
        })

    }
    function getOne(req, res) {

        userSchema.findOne({ id: req.params.id }, function (err, user) {
            return res.send({ err: err, user: user })
        })
    }
    function getAll(req, res) {
        console.log("get");
        var usertoken = new Token2(false, req.headers.token);

        if (usertoken.role < 2) {
            return res.status(401).send({});
        }
        userSchema.find({}, function (err, list) {
            if (err) {
                return res.status(500).send({});
            }
            console.log(list);
            console.log("list");
            return res.status(200).send(list);
        })
    }
    return {
        create: create,
        updateUser: updateUser,
        getOne: getOne,
        getAll: getAll

    }
}
module.exports = userController();