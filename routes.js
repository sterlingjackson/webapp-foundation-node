'use strict';

const express = require('express');
const router = express.Router();

// Load Modules
const Hello = require('./src/hello');
const Books = require('./src/books');
const Users = require('./src/users');
const Event = require('./src/event');


// Define each of the application's routes.
router.get('/', function (req, res) {
  const route = new Hello(req, res);
  route.run();
});

router.get('/books', function (req, res) {
  const route = new Books(req, res);
  route.run();
});

router.get('/users/:userId', function (req, res) {
  const route = new Users(req.params);
  route.run(req, res);
});

router.post('/event', function (req, res) {
  const route = new Event(req.params);
  route.run(req, res);
});

module.exports = router;
