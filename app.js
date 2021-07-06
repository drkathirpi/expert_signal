const express = require('express');
const path = require('path');
const app = express();
const routes = require("./server/routes/index-routes");
const port = process.env.PORT || 7000;
app.use('/', routes)

app.listen(port, ()=>{
    console.log("Server is running on port " + port)
})



