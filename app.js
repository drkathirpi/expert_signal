const path = require('path');
const express = require('express');
const app = express();
const {config, engine} = require('express-edge');
const InitiateMongoServer = require('./config/db');
const index = require('./routes/index');
const user = require('./routes/user')
const port = process.env.PORT || 5000;

var bodyParser = require('body-parser');
InitiateMongoServer();

app.use(engine);
app.set('views', __dirname + '/views/layouts');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(user)


if (process.env.NODE_ENV = "Production" || process.env.NODE_ENV === "staging"){
    app.use(express.static('public'));
    app.use(index);
}


app.listen(port, ()=>{
    console.log('Server started on port ' + port)
})