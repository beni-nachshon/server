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
        type : Number
    },
      phone : {
        type :Number
    },
      age : {
        type :Number
    },
    country : {
        type :String
    },
    city : {
        type :String
    },
    graduationYear : {
        type :Number
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
        type :Number
    },
    password : {
        type :String
    },
    role : {
        type : Number
    }
   
});

module.exports = mongoose.model("user",userSchema);

// age : any;
// country : any;
// city : any;
// graduationYear : any;
// academicInstitution : any
// medicalInstitution : any;
// residency: any;
// department : any;
// yearInResidency : any;