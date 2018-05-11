'use strict';

// Configuration
const config = {
  port: 3000
};
const secrets = {

};


// Framework
const express = require('express');
const app     = express();


// Load Modules
const Hello   = require('./src/hello');
const Books   = require('./src/books');
const Users   = require('./src/users');
const Event   = require('./src/event');


// Routing
app.get('/', function (req, res) {
  var route = new Hello(req.params);
  res.json(route.response());
});

app.get('/books', function (req, res) {
  var route = new Books(req.params);
  res.json(route.response());
});

app.get('/users/:userId', function (req, res) {
  var route = new Users(req.params);
  res.json(route.response());
});

app.post('/event', function (req, res) {
  var route = new Event(req.params);
  res.json(route.response());
});


// Start listening for requests.
app.listen(config.port);
console.log(`Server started and listening on port ${config.port}.`);
