var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('servicios', {
        isServicios: true
    }); /* view/servicios.hbs */
    
})



module.exports = router;