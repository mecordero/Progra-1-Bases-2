var mongoose = require("mongoose");

exports.Profesor = mongoose.model("profesor", {
    nombre:String,
    apellidos:String,
    carnet:String,
    email:String
});
