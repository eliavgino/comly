const express=require('express');
const bcrypt=require('bcrypt')
const mongoose=require('mongoose')
const User=require('../models/User')
const router=express.Router();
const Joi = require('joi');
const jwt=require('jsonwebtoken')



router.post('/', async(req, res) =>
 {
    const {error}= validate(req.body)
    if(error) return res.status(400).send(error.message)

    let user=await User.findOne({email:req.body.email})
    if(!user) return res.status(400).send('invalid email or password')
    const validPassword= await bcrypt.compare(req.body.password,user.password)
    let tokenUserId=null;
    if(validPassword){
        tokenUserId=user.generateJWT();
        }
        tokenUserId? res.send(tokenUserId):res.status(403).send('invalid email or password')
})


function validate(req){
    const schema = {
        email:Joi.string().email().min(4).max(255).required(),
        password: Joi.string().min(5).max(255).required(),
    };
    return  Joi.validate(req,schema)
}

module.exports = router;