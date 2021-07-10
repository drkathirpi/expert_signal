const express = require('express');
const app = express();
const routes = require("./routes/index-routes");
const user = require("./routes/user");
const { config, engine } = require("express-edge");
const port = process.env.PORT || 7000;
const InitiateMongoServer = require('./config/db');


app.use(express.urlencoded({extended : false}));

InitiateMongoServer();
app.use(express.json())

if (process.env.NODE_ENV = "Production" ){
    app.set('views', __dirname + '/views');
    app.use(engine);
    app.use(express.static('public'));
    app.use('/' , routes);
}

app.listen(port, ()=>{
    console.log("Server is running on port " + port)
})







