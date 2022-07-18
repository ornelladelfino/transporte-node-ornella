var pool = require('./bd');
var md5 = require('md5');

 

async function getUserAndPassword(user, password) {
    try {
        var query = 'select * from usuarios where usuario =? and password =? limit 1';
        var rows = await pool.query(query,[user, md5(password)]);
        return rows[0];
    }catch (error){
        console.log(error);
    }
} /* try and catch ayudan con el manejo de error. ante cualquier cosa que el codigo no entienda me larga el error */
module.exports = {getUserAndPassword}