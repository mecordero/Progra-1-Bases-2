var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var StudentSchema = new Schema({
	firstName: String,
	lastNames: String,
	carnet: {
		type: String,
		unique: true,
		required: 'El carnet es obligatorio',
		trim: true;
	},
	contrasena:String
});

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
StudentSchema.set('toJSON', {
  getters: true,
  virtuals: true
});


mongoose.model('Student',StudentSchema);