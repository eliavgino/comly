const express=require('express');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const _=require('lodash')
const {User}=require ('../models/User')
const {validateUser}=require ('../models/User')
const router=express.Router();


//add new user
router.post('/', async(req, res) => {
    const {error}=validateUser(req.body)
    if(error) return res.status(400).send(error.message)

    let user=await User.findOne({email:req.body.email})
    if(user) return res.status(400).send('user already exist')
  
    user=new User(_.pick( req.body,["userName",'email','password','phonNumber']))
    
   try{ 
    const salt= await bcrypt.genSalt(10)
    user.password=await bcrypt.hash(user.password,salt)
     user =await user.save()
     res.header('x-auth-token',user.generateJWT())
     .header('access-control-expose-headers','x-auth-token')
     .send(_.pick(user,['userName','email','password','phonNumber']))}
   catch(err){
    user={} 
   res.status(400).send(err.message)
}

})

module.exports = router;