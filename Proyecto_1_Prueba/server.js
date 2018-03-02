// Servidor
var express = require("express");

// Parsear métodos post,delete
var bodyParser = require("body-parser");

// Simula métodos http
var methodOverride = require('method-override');

// Para usar mongo
var mongoose = require("mongoose");

// Variable que tiene el servidor
var app = express();
var port = 8000;
var asociados = require("./routes/admin/asociados");
var microbuses = require("./routes/admin/microbuses");
var excursiones = require("./routes/admin/excursiones");
var destinos = require("./routes/admin/destinos");
var reservaciones = require("./routes/admin/reservaciones");
var depositos = require("./routes/admin/depositos");
var destinosClientes = require("./routes/clientes/destinos");
var excursionesClientes = require("./routes/clientes/excursiones");
var reservacionesClientes = require("./routes/clientes/reservaciones");
var admin = require("./routes/admin/admin");
var cliente = require("./routes/clientes/client");
var tramites = require("./routes/clientes/tramites");


// Configuraciones
app.set("view engine","pug");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port);

console.log("*** SERVER RUNNING ON PORT -> " + port);