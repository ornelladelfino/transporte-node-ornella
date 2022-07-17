var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona:req.session.nombre
        /* aca va a traer el nombre del que ingrese */
        /* un layout.hbs */
    }); /* view/admin/novedades.hbs */
    
})/* cierro get */

module.exports=router;