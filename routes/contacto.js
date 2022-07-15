var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contacto', {
        isContacto: true
    }); /* view/contactpo.hbs */
    
})



module.exports = router;