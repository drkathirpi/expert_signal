const express = require("express");
const app = express();
const router = express.Router();
const path = require('path');
const {ensureAuthenticated} = require('../middleware/auth')

router.get('/', (req,res)=>{
    res.sendFile(path.resolve('./Pages/index.html'))
})

router.get('/dashboard', ensureAuthenticated, (req,res)=>{
    res.render('dashboard', {
        name : req.user.username,
    });
    })

module.exports = router;