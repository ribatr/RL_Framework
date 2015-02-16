'use strict';

var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes');



app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.use(express.static(__dirname + '/media'));
app.use(express.static(__dirname + '/dest'));
//app.use(express.static(path.join(__dirname, 'media')));

// Set application routes
// var urls = require('./urls.js');
// urls.createServerRoutes(app);

var index = require('./routes/index.js')(app);
app.get('/', index.index);

var homepage = require('./routes/homepage.js')(app);
app.get('/homepage', homepage.index);

// app.get("/", function(request, response) {
//   response.render("index", { pageTitle      : "Index", 
//                              pageName       : "Index" });
// });

// app.get("/homepage", function(request, response) {
//   response.render("homepage", { pageTitle      : "Home Page", 
//                              pageName       : "homepage" });
// });

module.exports = app;