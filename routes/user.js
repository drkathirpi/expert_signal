const express = require("express");
const router = express.Router();
const signup = require('../controllers/signup')

// creating a route for -- user/create to create or sign Up a new user

router.post('/signUp', [
    check("username", "please enter a valid username").not().isEmpty(),
    check("email", "please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength().isLength({
        min: 6
    })
],
 signup
)



module.exports = router;