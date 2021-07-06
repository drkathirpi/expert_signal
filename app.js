const express = require('express');
const path = require('path');
const app = express();
const routes = require("./server/routes/index-routes")

app.use(routes);



