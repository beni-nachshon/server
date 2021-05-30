var Crypto = require("crypto-js");
const Bcrypt = require("bcrypt");

const key = "aghkdsjfhglkgdsgsfgggdsd";

function crypto(){
    function cryptPassword(password){
        return Bcrypt.hashSync(password,10);
    }
    function compare(password1,hash){
        return Bcrypt.compareSync(password1,hash);
    }
    return { cryptPassword : cryptPassword,
        compare : compare};
}

module.exports = crypto();


