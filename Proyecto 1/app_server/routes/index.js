var express = require('express');
var router = express.Router();
var ctrlRegistro = require('../controllers/registro');

/* GET home page. */
router.get('/', ctrlRegistro.ingreso); //pantalla de ingreso

router.get('/creacion', ctrlRegistro.creacion); //pantalla de ingreso

module.exports = router;
