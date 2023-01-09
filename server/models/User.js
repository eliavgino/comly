const mongoose= require('mongoose')
const Joi = require('joi');
const { unique } = require('joi/lib/types/array');
const jwt=require('jsonwebtoken');
const { min } = require('lodash');


const userschema=new mongoose.Schema({
    
    userName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:255
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phonNumber:{
        type:String,
        minlength:10,
        maxlength:10,
        required:true,
        }
        
    })
    
userschema.methods.generateJWT=function(){
        const token=jwt.sign({_id:this._id,userName:this.userName},'whats app im doing jenerat now for the sign up');
        return token;
}
 const User=new mongoose.model('User',userschema)
function validateUser(user){
    const schema = {
        userName: Joi.string().min(2).max(50).required(),
        email:Joi.string().email().min(4).max(255).required(),
        password: Joi.string().min(5).max(1024).required(),
        phonNumber:Joi.string().min(10).max(10).required()
    };
    return Joi.validate(user,schema)
}

module.exports.validateUser=validateUser;
module.exports.User=User;
