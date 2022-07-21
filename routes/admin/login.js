var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel')

router.get('/', function(req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout' /* un layout.hbs */
    }); /* view/admin/login.hbs */
    
})/* cierro get */

router.get('/logout', function(req, res, next){
    req.session.destroy(), /* destruye ide, nombre, todo */
    res.render('admin/login', {
        layout:'admin/layout'
    })
})

router.post('/', async function (req, res, next) {
    try{
console.log(req.body);
var usuario = req.body.usuario;/* flavia */
var password = req.body.password;/* 1234 */

var data = await usuariosModel.getUserAndPassword(usuario, password);
/* var data = select * from usuarios where usuario =flavia and password=1234 en md5 */
/* select traeria id, usuario y password. en mi caso 1, flavia, 1234 en md5 */
console.log(data)
if (data != undefined){
    req.session.id_usuario = data.id; /* 1 */
    req.session.nombre = data.usuario;/* Flavia */
     
    res.redirect('/admin/novedades')
} else{
    res.render('admin/login', {
        layout:'admin/layout',
        error:true
    })
}
    }catch(error){console.log(error)
    }
    

})

module.exports=router;
