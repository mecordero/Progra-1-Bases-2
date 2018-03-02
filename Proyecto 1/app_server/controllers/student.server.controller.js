var Student = require('mongoose').model('Student');


exports.saveStudent = function(req, res) {
		// Creo el objeto Persona
		Student.create(
			{nombre : req.body.nombre,	apellido: req.body.apellido, edad: req.body.edad}, 
			function(err, persona) {
				if (err)
					res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
			});

	}

// Create a new 'create' controller method
exports.create = function(req, res, next) {
	// Create a new instance of the 'User' Mongoose model
	var student = new Student(req.body);

	// Use the 'User' instance's 'save' method to save a new user document
	student.save(function(err) {
		if (err) {
			// Call the next middleware with an error message
			return next(err);
		} else {
			// Use the 'response' object to send a JSON response
			res.json(student);
		}
	});
};