/* Pagina de ingreso*/
module.exports.ingreso = function(req, res){
   res.render('ingreso', { title: 'Pagina de ingreso' });
};

/* Pagina de crear usuario */
module.exports.creacion = function(req, res){
   res.render('creacion', { title: 'Pagina creacion usuario' });
};
