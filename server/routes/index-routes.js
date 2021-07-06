const express =  require("express");
const {config, engine} = require('express-edge');
const app = express();
const bodyParser = require("body-parser");
var router = express.Router()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(engine())
app.set('views', __dirname + '/Client/views');
app.use(express.static('./Client/public'));

router.get('/', (req,res)=>{
    res.render('index')
})