const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    id : {
        type :String
    }, 
     name : {
        type : String
    }, 
     passport : {
        type : String
    },
      phone : {
        type :String
    },
      age : {
        type :String
    },
    country : {
        type :String
    },
    city : {
        type :String
    },
    graduationYear : {
        type :String
    },
    academicInstitution : {
        type :String
    },
    medicalInstitution  : {
        type :String
    },
    residency : {
        type :String
    },
    department  : {
        type :String
    },
    yearInResidency  : {
        type :String
    },
    password : {
        type :String
    },
    role : {
        type : Number
    }
   
});

module.exports = mongoose.model("user",userSchema);

