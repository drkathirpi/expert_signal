const express =  require("express");
const path = require('path')
const app = express();
var bodyParser = require('body-parser');

const router = express.Router()
const landPage =  require("../controllers/homepage");
const signUpPage = require("../controllers/createAccount")
const loginPage =  require("../controllers/loginAccount")



app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

router.get('/', landPage);
router.get('/signUp', signUpPage) 
router.get('/login', loginPage);



module.exports = router;