
    // here you can add as many models u want ie  carPark: require('./parking.js'),  meters: require('./meterparking.js')
    //like a registry for all the models u have in the system and load them in the server index file of the app   

module.exports = {
  parking: require('./parking.js'),
  movie: require('./Movie.js'),
  meters: require('./Meters.js'),
  bluebadge: require('./Bluebadge.js')
};
