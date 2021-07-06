const app = require('express');
const path = require('path');



app.get('/', (req, res)=> {
  res.render('index')
})