const express = require('express')
const app = express();
const createSignal =  require('../models/Post');
const router = express.Router();
const {encrypt, decrypt} = require('../config/encrypt')

router.post('/create/signal', (req,res)=>{
   const{name , signals} = req.body;
   let errors = [];
   if(!signals || !name){
       errors.push({Msg: "Make sure both input fields are filled"})
   }else{
    var enc_signals = encrypt(signals);
   }
   
   
})

module.exports = router;