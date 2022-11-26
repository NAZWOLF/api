const mongoose = require("mongoose")





const user = mongoose.Schema({
    name: {
        type : String,
        required : true,
        unique : true
        
    },
    prenom : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },

    username : {
        type : String,
        required : true,
        unique : true
    },
    
    password : {
            type : String,
            required : true
        }
    

})
const UserModel = mongoose.model("united", user)
module.exports = UserModel