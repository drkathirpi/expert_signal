const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../models/User');
const { check, validationResult} = require("express-validator");
const bcrypt = require('bcryptjs');


router.get('/signUp', (req, res)=> {
    res.sendFile(path.resolve('./Pages/signUp.html'))
})

router.get('/login', (req, res)=>{
    res.sendFile(path.resolve('./Pages/login.html'))
})

router.post('/user/signup',
      [
      check("email", "Please enter a valid username").isEmail(), 
      check("password", "Password must be more than 6 characters").isLength({min:6})
    ],
     (req, res)=>{
      
      const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        if(errors.length > 0 ) {
            res.render('signup', {
                errors : errors,
                name : username,
                email : email,
                password : password,
               })
            } 

    const {username,email, password,} = req.body;


    User.findOne({email : email}).exec((err,user)=>{ 
        if(user) {
            errors.push({msg: 'email already registered'}); 
        } 
        else {
            const user = new User({
                username : username,
                email : email,
                password : password
            });
            
            bcrypt.genSalt(10, (err, salt)=>{
                bcrypt.hash(user.password, salt, (err,hash)=>{
                    if(err) throw err;
                    user.password = hash;
                    user.save((err)=>{
                        if(err) throw err;
                        else res.render('dashboard', {
                            name: user.username
                        })
                     
                    })
                    
                })
            })
           
           
        }
    })
});



module.exports = router;