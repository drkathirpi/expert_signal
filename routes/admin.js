const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();

router.get('/auth/admin/expertsignals', (req,res)=>{
    res.render('admin_login');
})

router.post('/auth/admin/expertsignals', (req,res)=>{
    if(!req.body.password === 'Beans'){
        res.send('Go back idiot')
    }
    else{
        res.render('admin')
    }
})

module.exports = router;