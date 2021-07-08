const express = require("express");
const {check, validationResult} =  require('express-validator');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('../database/models/User')

router.post('/user/create', 
     check("username", "Please Enter a Valid Username")
)