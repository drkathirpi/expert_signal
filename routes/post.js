const express = require('express')
const app = express();
const CryptoSignal =  require('../models/Post');
const router = express.Router();
const {encrypt, decrypt} = require('../config/encrypt')

router.post('/create/signal', (req,res)=>{
   const{name , signals} = req.body;
   let errors = [];
   if(!signals || !name){
   errors.push({Msg: "Make sure both input fields are filled"});
   }
   else{
     var signal_enc = encrypt(signals);
      CryptoSignal.findOne({signals : signal_enc}, (err,data)=>{
        if(err) {
          console.log(err)
        } 
        if(data){
         errors.push({msg: "User Already Exists"})
         }
         else{
            const crypto_signal = new CryptoSignal({
               name : name,
               signal: signal_enc
            })
            crypto_signal.save((err)=>{
               if (err) throw err;
               res.render('admin', {error: "Signal posted successfully"})
            })
            
         }
      })


   }
})
module.exports = router;