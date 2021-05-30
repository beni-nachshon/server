const port =  9000;
const expressFunction = require('express');
var app =  expressFunction();

const mongoose = require('mongoose');
const userRoutes = require('./routes');
const dbPath = "mongodb://127.0.0.1:27017/beniDB";

mongoose.connect(dbPath);

app.use(require("cors")());
app.use(expressFunction.json());

app.use("/api/users",userRoutes);
app.use("/api/auth",require('./loginRoutes.js'));

app.listen(port,function(){
    console.log("server is up in port:" + port );
});



