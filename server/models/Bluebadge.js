//models are only for defining schemas for the database
var mongoose = require('mongoose');

// Create the Parking Schema.
var BluebadgeSchema = new mongoose.Schema({
  id: {
    type: String
  },
  location: {
    type: String
  },
  no_spaces: {
    type: String
  },
  description: {
      type: String  
  },
  street: {
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
  }
  });

// Export the model schema when one requires it.
module.exports = BluebadgeSchema;
