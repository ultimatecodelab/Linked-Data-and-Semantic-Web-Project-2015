
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support allowing other servers to access our API
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type'); //opening accessibilty
  next();
});


// Connect to MongoDB
mongoose.connect('mongodb://gcpadmin:gcp00353$@ds057204.mongolab.com:57204/galwaycityparking');
//mongodb://<dbuser>:<dbpassword>@ds057204.mongolab.com:57204/galwaycityparking
//mongoose.connect('mongodb://localhost/galwaycityparking');

mongoose.connection.once('open', function() {

// Load the models from the model -> index file ...dependency inject them into the controllers...allowing them to have access to all models
  app.models = require('./models/index');
 
  // Loading the routes.
  var routes = require('./routes');
    
    //iterating over all the routes
  _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
  });
  


  console.log('Listening on port 3000...');
  app.listen(3000);
});


