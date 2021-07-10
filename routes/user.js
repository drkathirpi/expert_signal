const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../models/User');
const { check, validationResult} = require("express-validator");
const bcrypt = require('bcryptjs');


router.get('/signUp', (req, res)=> {
    res.render('signup',{
        typeOfForm: 'Sign Up'
    });
})

router.get('/login', (req, res)=>{
    res.render('login', {
        typeOfForm: 'Login'
    })
})

router.post('/user/signup',
      [
      check("email", "Please enter a valid username").isEmail(), 
      check("password", "Password must be more than 6 characters").isLength({min:6})
    ],
     (req, res)=>{
        const {username,email, password, password2} = req.body;
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
                confirmedPassword: password2
               })
            } 
            
            if(password !== password2) {
                errors.push({msg : "passwords dont match"});
            }
    User.findOne({email : email}).exec((err,user)=>{ 
        if(user) {
            errors.push({msg: 'email already registered'}); 
            res.render('signup',{errors,name,email,password,password2})  
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
                        
                        else req.flash('success_msg','SignUp successful'); res.render('dashboard', {
                            name: user.username
                        })
                    })
                    
                })
            })
           
           
        }
    })
});

router.post('/login',  passport.authenticate('local', {
    successRedirect : '/dashboard',
    failureRedirect : '/users/login',
    failureFlash : true
    }),  (req,res,next)=>{
     
})

router.get('/logout', (req,res)=>{
    req.logout();
    req.flash('success_msg','Now logged out');
    res.redirect('/users/login');
})

module.exports = router;