const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../models/User');
const { check, validationResult} = require("express-validator");
const bcrypt = require('bcryptjs');
const passport = require('passport');
const displaySignalController = require("../controllers/getSignals")
require("../config/passport")(passport)

router.get('/signUp', (req, res)=> {
    res.render('signup',{
        typeOfForm: 'Sign Up'
    });
})

router.get('/login' , (req, res)=>{
    res.render('login', {
        typeOfForm: 'Login'
        
    })
})

router.post('/signup', 
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
                return res.status(400).json({
                    msg: "Passwords do not match"
                });
            }
    User.findOne({email : email}).exec((err,user)=>{ 
        if(user) {
            return res.status(400).json({
                msg: "User Already Exists"
            });
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
                            name: user.username,
                            from: 'Welcome To Expert Signals'
                        })
                    })
                    
                })
            })
           
           
        }
    })
});

router.post('/login',  (req,res,next)=>{
    passport.authenticate('local',{
        successRedirect : '/dashboard',
        failureRedirect: '/user/login',
        failureFlash : true
    })(req,res,next)
})

router.get('/logout', (req,res)=>{
    req.logout();
    req.flash('success_msg','Now logged out');
    res.sendFile(path.resolve('./Pages/index.html'))
})

module.exports = router;