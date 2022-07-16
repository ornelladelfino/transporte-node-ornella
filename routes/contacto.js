var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
    res.render('contacto', {
        isContacto: true
    }); /* view/contactpo.hbs */
    
})

router.post('/', async function (req, res, next) {
   /* captura de datos  */
/*     console.log(req.body) */
var nombre = req.body.nombre;
var mail = req.body.mail;
var telefono = req.body.telefono;
var comentario = req.body.comentario;

/* console.log(req.body.comentario)  */
var obj = {
    to: 'ornella@hotmail.com',
    subject: 'contacto desde la pagina web',
    html: nombre + 'se contacto desde la pagina web y quiere saber mas info a este correo' + mail + '<br> Su tel es: ' + telefono + '. Su comentario es: ' + comentario + '.'

}
var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
}) /* finaliza el transport */
var info = await transport.sendMail(obj);
res.render('contacto', {
    message: 'Mensaje enviado correctamente'
})
})

/* finaliza router.post */



module.exports = router;