
// taking a mongoose model and converts it into a REST API/ builds all the CRUD operations
var restful = require('node-restful');

module.exports = function(app, route) {

  // Setting up the controller for REST...based on the parking model which will have DEL, PUT, POST, GET
  var rest = restful.model(
    'parking',
    app.models.parking
  ).methods(['get', 'put', 'post', 'delete']);

  // Register this REST API with the application at specific routes.
  rest.register(app, route);

  // Return middleware...to  provide custom features per controller basis
  return function(req, res, next) {
    next();
  };
};
