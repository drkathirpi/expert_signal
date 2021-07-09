const express = require('express');
const path = require('path');
const app = express();
const routes = require("./routes/index-routes");
const createUser = require("./routes/user.js")
const user = require('./routes/user');
const { config, engine } = require("express-edge");
const port = process.env.PORT || 7000;
const InitiateMongoServer = require('./config/db');

InitiateMongoServer();


if (process.env.NODE_ENV = "Production" ){
    app.set('views', __dirname + '/views');
    app.use(engine);
    app.use(express.static('public'));
    app.use(routes);
    app.use(createUser)
}

app.listen(port, ()=>{
    console.log("Server is running on port " + port)
})







