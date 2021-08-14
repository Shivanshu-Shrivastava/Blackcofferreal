const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:3
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    }
},
    {timestamps:true}
)

const User = mongoose.model('User',UserSchema)

module.exports = User