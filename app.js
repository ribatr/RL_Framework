'use strict';

var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes');



app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
//app.use(express.static(__dirname + '/media'));
app.use(express.static(__dirname + '/dest'));
//app.use(express.static(path.join(__dirname, 'media')));

// Set application routes
// var urls = require('./urls.js');
// urls.createServerRoutes(app, routes);


app.get("/", function(request, response) {
  response.render("index", { pageTitle      : "Index", 
                             pageName       : "Index" });
});

module.exports = app;
