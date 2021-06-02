const crypto = require("./crypt.js");

var split = "_!_";
var ttl = 1000 * 500;

function userToken (isNew , token , name , _id,role){
    if (isNew){
        this.name = name;
        this._id = _id;
        this.role = role;
        
        this.expirationTime = Date.now()+ ttl;
        this.token = crypto.getEncrypt(name + split + _id + split +  role + split + this.expirationTime); 
         }
         else {
             this.token = token;
             var tokenStr = crypto.getDecrypt(token).split(split);
             this.name = tokenStr[0];
             this._id = tokenStr[1];
             this. role = tokenStr[2];
             this.expirationTime = tokenStr[3];
         }
         this.isNotexpired = function (){
             if (this.expirationTime && parseInt(this.expirationTime)> Date.now()){
                 return true;
             }
             return false;
         }
}
module.exports = userToken;