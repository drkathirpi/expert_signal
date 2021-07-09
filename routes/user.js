const express = require("express");
const {check, validationResult} =  require('express-validator');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('../database/models/User')

router.post('/user/create', [
    check("username", "please enter a valid username")
    .not().isEmpty(), 

    check("email", "please enter a valid mail").isEmail(),

    check("password", "please enter a valid password").isLength({
        min: 6
    })
],
 async (req, res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const {username, email, password} = req.body;
    try{
         let user = await User.findOne({
             email
         });
         if(user){
             return res.status(400).json({
                 msg: "User Already Exists"
             })
         }

         user = new User({
             username,
             email,
             password
         })
    }
    catch(err){
        
    }
 }
)