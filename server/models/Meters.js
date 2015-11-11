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
  latitude: {
    type: String
  },
  longitude: {
    type: String
  }
});

// Export the model schema when one requires it.
module.exports = MeterSchema;

