const port =  9000;
const expressFunction = require('express');
var app =  expressFunction();
const token1 = require('./userToken.js');

 

const mongoose = require('mongoose');
const userRoutes = require('./routes');
const dbPath = "mongodb://127.0.0.1:27017/beniDB";

const RoutesCreate = require('./routesCreate.js');


mongoose.connect(dbPath);

app.use(require("cors")());
app.use(expressFunction.json());


app.use("/api/users",function(req, res ,next){
  
    

    var   usertoken = new token1(false,req.headers.token);
    
    if (!usertoken.isNotexpired()){
       
        res.send( usertoken.isNotexpired());

        
    }
    
    
   
    return next();
    
})

app.use("/api/users",userRoutes);
app.use("/api/auth",require('./loginRoutes.js'));

app.use("/api/create", RoutesCreate);



app.listen(port,function(){
    console.log("server is up in port:" + port );
});



