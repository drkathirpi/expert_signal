const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../models/User');


router.get('/signUp', (req, res)=> {
    res.sendFile(path.resolve('./Pages/signUp.html'))
})

router.get('/login', (req, res)=>{
    res.sendFile(path.resolve('./Pages/login.html'))
})

router.post('/user/signup', (req, res)=>{
    const {name,email, password,} = req.body;
    console.log(req.body)
    let errors = [];
    console.log(' Name ' + name+ ' email :' + email+ ' pass:' + password);

    if (!name || !email || !password) {
        errors.push({msg : "Please fill in all fields"})
    }

    if(password.length < 6 ) {
        errors.push({msg : 'password atleast 6 characters'})
    }
    
    User.findOne({email : email}).exec((err,user)=>{
        console.log(user);   
        if(user) {
            errors.push({msg: 'email already registered'}); 
        } 
        else {
            const newUser = new User({
                name : name,
                email : email,
                password : password
            });
        }
    })
});



module.exports = router;