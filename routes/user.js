//requiring modules, bcrypt for hashing passwords, router for handling routes, jwt for handling sessions

const express = require("express");
const {check, validationResult} =  require('express-validator');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require('../database/models/User');

// creating a route for -- user/create to create or sign Up a new user

router.post('/signUps', [
    check("username", "please enter a valid username").not().isEmpty(),
    check("email", "please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength().isLength({
        min: 6
    })
],


//End of validator code to check if the inputs are valid and give minimum password value


//asynchronous code to validate request

async (req, res) => {
    console.log(req)
    const errors = validationResult(req);
    //calling if the errors array is not empty and passes the error 
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

 //calling the username email and password from the post request

    const { username, email, password} = req.body;
    try {
        //checking mongo for an already registered user

        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({
                msg: "User Already Exists"
            });
        }
       // if its a new user it creates a new user 
        user = new User({
            username,
            email,
            password
        });
    
        //hashing the password with bcrypt

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

         //saving the new user
        await user.save();
       


        const payload = {
            user: {
                id: user.id
            }
        };
        jwt.sign(
            payload,
            "randomString", {
                expiresIn: 10000
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
} 
)



module.exports = router;