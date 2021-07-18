const mongoose = require('mongoose');

const SignalSchema = new mongoose.Schema({
     name:{
         type:String,
         required: true
     },
     signal: {
         type: String,
         required: true
     },
     date:{
         type: Date,
         default: Date.now
    }

})

const Signal = mongoose.model('Signal', SignalSchema);
module.exports = Signal; 