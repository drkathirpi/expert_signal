const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();
const Post = require('../models/Post')
const {encrypt, decrypt} = require('../config/encrypt')


router.get('/auth/admin/expertsignals', (req,res)=>{
    res.render('admin_login');
})

router.post('/auth/admin/expertsignals',async (req,res)=>{
    const posts = await Post.find({});
    if(!req.body.password === 'Beans'){
        res.send('Go back idiot')
    }
    else{
        res.render('admin', {posts, decrypt})
    }
})

module.exports = router;