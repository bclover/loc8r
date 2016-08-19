var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/Loc8r';

//if in production use, the production URI instead
//to point to the live database instead of the local one
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
    console.log("dbURI:" + dbURI)
}
mongoose.connect(dbURI);

var gracefulShutdown = function(msg, callback){
    mongoose.connection.close(function() {
        console.log('\rMongoose disconnected via => ' + msg);
        callback();
    });
};

mongoose.connection.on('connected', function() {
    console.log('\rMongoose connected to => ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('\rMongoose connection error => ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('\rMongoose disconnected from => ' + dbURI);
});

//Handle nodemon restarts
process.once('SIGUSR2', function() {
   gracefulShutdown('nodemon restart.', function() {
       process.kill(process.pid, 'SIGUSR2');
   });
});

//Handle app termination
process.once('SIGINT', function() {
    gracefulShutdown('app termination.', function() {
        process.exit(0);
    });
});

//Handle Heroku app termination
process.once('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown.', function() {
        process.exit(0);
    });
});

//Bring in Schemas so they're available to the app
require('./locations');