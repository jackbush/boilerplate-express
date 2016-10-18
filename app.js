// Simulate config options from other environments by
// customising the .env file in your project's root folder.
require('dotenv').load();

var express = require('express');
var path = require('path');
var app = express();

// Configure view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Load models and connect to database
require('./lib/db.js')();

// Middleware
require('./lib/middleware.js')(app);

// Load controllers and attach them to routes
require('./lib/routes.js')(app);

// Error handler
require('./lib/errorHandler.js')(app);

module.exports = app;
