const express = require("express");
const app = express();
const router = express.Router();
const path = require('path')

router.get('/', (req,res)=>{
    res.sendFile(path.resolve('./Pages/index.html'))
})

module.exports = router;