var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel')


router.get('/', async function(req, res, next) {
    var novedades = await novedadesModel.getNovedades();  
    res.render('admin/novedades', {
        layout: 'admin/layout',
       /*  novedades, */
        persona:req.session.nombre,
        novedades

        /* aca va a traer el nombre del que ingrese */
        /* un layout.hbs */
    }); /* view/admin/novedades.hbs */
    
})/* cierro get */
/* las flechas vienen a reemplazar la palabra funcion */
/* esto sirve para mostrar el form de alta las novedades */
router.get('/agregar', (req, res, next) => {
res.render('admin/agregar', {
    layout:'admin/layout'
})
})
module.exports=router;