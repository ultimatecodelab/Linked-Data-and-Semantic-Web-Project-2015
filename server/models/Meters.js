//models are only for defining schemas for the database
var mongoose = require('mongoose');

// Create the Parking Schema.
var MeterSchema = new mongoose.Schema({
  meterid: {
    type: String
  },
  machineid: {
    type: String
  },
  location: {
    type: String
  },
  lat: {
    type: String
  },
  long: {
    type: String
  }
});

// Export the model schema when one requires it.
module.exports = MeterSchema;

