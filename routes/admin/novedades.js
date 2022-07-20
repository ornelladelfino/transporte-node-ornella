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

router.post('/agregar', async(req, res, next) =>{
    /* console.log(req.body); */
    try {
        if(req.body.titulo != "" && req.body.subtitulo !="" && req.body.cuerpo !="") {
            await novedadesModel.insertNovedades(req.body);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
        
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout:'admin/layout',
            error:true,
            message: 'No se carga la novedad'
        })
        
    }
})

router.get('/eliminar/:id', async (req, res, next) =>{
    /* console.log(req.params.id); */
    var id = req.params.id;
    await novedadesModel.deleteNovedadByID(id);
    res.redirect('/admin/novedades')
})

/* vista modificar ()form y lso campor a modificar */

router.get('/modificar/:id', async(req, res, next) =>{
    var id = req.params.id;
    var novedad = await novedadesModel.getNovedadesByID(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
     
})
})
router.post('/modificar', async(req, res, next) =>{
    try{
        var obj = {
            titulo:req.body.titulo,
            subtitulo:req.body.subtitulo, 
            cuerpo:req.body.cuerpo
        }
        await novedadesModel.modificarNovedadByID(obj, req.body.id)
        res.redirect('/admin/novedades')
    }catch(error){
console.log(error)
res.render('admin/modificar', {
    layout: 'admin/layout',
    error: true,
    message: 'No se modifico la novedad '
}) 
    }
})

module.exports=router;