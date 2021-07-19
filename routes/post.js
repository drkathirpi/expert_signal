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
      signals = encrypt(signals);
      CryptoSignal.findOne({signals : signals}, (err,data)=>{
        if(err) {
          console.log(err)
        } 
        if(data){
         errors.push({msg: "User Already Exists"})
         }
         else{
            const crypto_signal = new CryptoSignal({
               name : name,
               signal: signals
            })
            crypto_signal.save((err)=>{
               if (err) throw err;
            })
         }
      })


   }
})
module.exports = router;