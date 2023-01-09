const { response } = require('express');
const jwt=require('jsonwebtoken')
module.exports=function auther(req,res,next)
{
    const token=req.header('x-auth-token');
    if(!token){
       return res.status(401).send('access denied no token provided')
    }
   try{ const decoded=jwt.verify(token,'whats app im doing jenerat now for the sign up')
    req.user=decoded;
    next();}
    catch(error){
        response.status(400).send('invalid token')
    }
}
