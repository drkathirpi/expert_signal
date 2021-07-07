const express =  require("express");
const path = require('path')
const app = express();
var bodyParser = require('body-parser');

const router = express.Router()
const landPage =  require("../controllers/homepage");
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', landPage);

router.get('/signUp', (req, res)=>{
    res.sendFile(path.resolve('./Pages/signUp.html'))
})

module.exports = router;