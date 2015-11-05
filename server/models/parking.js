//models are only for defining schemas for the database
var mongoose = require('mongoose');

// Create the Parking Schema.
var ParkingSchema = new mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  no_spaces: {
    type: String
  },
  lat: {
    type: String
  },
  long: {
    type: String
  },
  eastitm: {
    type: String
  },
  northitm: {
    type: String
  },
  eastig: {
    type: String
  },
  northig: {
    type: String
  },
  types: {
    type: String
  }
});

// Export the model schema when one requires it.
module.exports = ParkingSchema;