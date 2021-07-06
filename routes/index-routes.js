const express =  require("express");
const app = express();
const { config, engine } = require("express-edge");
var bodyParser = require('body-parser');
app.use(engine);
const router = express.Router()
const landPage =  require("../controllers/homepage");
app.set('views', __dirname + '/Client/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', landPage);

module.exports = router;