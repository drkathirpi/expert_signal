const express = require('express');
const path = require('path');
const app = express();
const routes = require("./routes/index-routes");
const { config, engine } = require("express-edge");
const port = process.env.PORT || 7000;
const InitiateMongoServer = require('./config/db');

InitiateMongoServer();

app.set('views', __dirname + '/views');
app.use(engine);
app.use(express.static('public'));
app.use('/', routes)



app.listen(port, ()=>{
    console.log("Server is running on port " + port)
})



