// Load the module dependencies
var	config = require('./config'),
	mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	var db = mongoose.connect('mongodb://localhost:8080/RSA';

	require('../app/models/modelos')

	// Return the Mongoose connection instance
	return db;
};