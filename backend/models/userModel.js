const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true

    },
    password:{
        type:String,
        require:true
    },
    role:{
        type: String,
        enum : ['Teacher','Student','Institute'],
        default: 'Student'
    }
})

module.exports.userModel = new mongoose.model("users",UserSchema);
