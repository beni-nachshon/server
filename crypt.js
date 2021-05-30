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
    function getEncrypt (input){
        const enc = Crypto.AES.encrypt(input,key);
        return enc.toString();
    }
    function getDecrypt (input){
        const dec = Crypto.AES.decrypt(input,key);
        return dec.toString(Crypto.enc.Utf8);
    }

    return { cryptPassword : cryptPassword,
        compare : compare,
        getEncrypt : getEncrypt,
        getDecrypt : getDecrypt
    
    };
}

module.exports = crypto();


