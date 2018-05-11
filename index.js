'use strict';

// Configuration
const config = {
  port: 3000,
  database: 'mongodb://localhost:27017/shanaapp'
};


// Framework
const express = require('express');
const routes = require('./routes');
const app = express();


// Authentication
// ...


// Routing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);


// Start listening for requests.
app.listen(config.port);
console.log(`Started listening on port ${config.port}.`);
