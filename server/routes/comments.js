const express=require('express');
const _=require('lodash')
const jwt=require('jsonwebtoken')
const Comment=require ('../models/Comment')
const validateComment=require ('../models/Comment')
const router=express.Router();
const auther=require('../middlewares/auther');
const { decode } = require('jsonwebtoken');
const { token } = require('morgan');


router.get('/',async (req,res)=>{
    const comment=await Comment
    .find()
    .sort('name')
    res.send(comment);
});

router.post('/',auther,async(req,res)=>{
    const {error} = validateComment(req.body)
    if(error) 
        return res.status(400).send(error.datails[0].message)
    try{
        const token=req.headers['x-auth-token'];
         const decoded=jwt.decode(token)
        let comment =new Comment({
            body:req.body.body,
            name:decoded.userName
        });
        comment=await comment.save();
        res.status(201).send(comment);
      
        }
     catch(error){
        console.log(error);
        res.status(400).send(error.message)
    }
});
module.exports=router;