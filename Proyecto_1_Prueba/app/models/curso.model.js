var mongoose = require('mongoose');


exports.Curso = mongoose.model("curso", {
	nombre: String,
	creditos:Number,
	
});