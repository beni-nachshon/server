const crypto = require("./crypt.js");
const userRoutes = require("./routes.js");
var split = "_!_";
var ttl = 1000 * 60;

function userToken (isNew , token , name , _id){
    if (isNew){
        this.name = name;
        this._id = _id;
        this.expirationTime = Date.now()+ ttl;
        this.token = crypto.getEncrypt(name + split + _id + split + this.expirationTime); 
         }
         else {
             this.token = token;
             var tokenStr = crypto.getDecrypt(token).split(split);
             this.name = tokenStr[0];
             this._id = tokenStr[1];
             this.expirationTime = [2];
         }
         this.isNotexpired = function (){
             if (this.expirationTime && parseInt(this.expirationTime)> Date.now()){
                 return true;
             }
             return false;
         }
}
module.exports = userToken;