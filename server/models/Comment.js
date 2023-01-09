const mongoose = require('mongoose')
const Joi=require('joi')
const { join } = require('lodash')

const commentschema=new mongoose.Schema({
    body:{
        type:String,
        required:true,
        minlength:2,
        maxlength:2024
    },
    name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:255
    }
})
const Comment=new mongoose.model('Comment',commentschema)
function validateComment(comment)
{
    const schema={
        body:Joi.string().min(2).max(2024),
        name:join.string().min(2).max(255)
    }
    return Joi.validate(comment,schema)
}

module.exports=validateComment;
module.exports=Comment;