const express =  require("express");
const app = express();
var bodyParser = require('body-parser');

const router = express.Router()
const landPage =  require("../controllers/homepage");
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', landPage);

module.exports = router;