'use strict';

// Configuration
const config = {
  port: 3000
};
const secrets = {

};

// Framework
var express = require('express');
var app     = express();

// Routes
var Routes  = require('./src/routes');
var Hello   = require('./src/hello');
var Books   = require('./src/books');
var Users   = require('./src/users');
var Event   = require('./src/event');

// Routing
app.get('/', function (req, res) {
  var route = new Hello;
  res.send(route.response());
});

app.get('/books', function (req, res) {
  var route = new Books;
  res.send(route.response());
});

app.get('/users/:userId', function (req, res) {
  var route = new Users(req.params);
  res.send(route.response());
});

app.post('/event', function (req, res) {
  var route = new Event(req.params);
  res.send(route.response());
});


// Start listening for requests.
app.listen(config.port);
console.log(`Server started and listening on port ${config.port}.`);
