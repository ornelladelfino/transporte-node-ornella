 var mysql = require('mysql');
 var util = require('util');
 var pool = mysql.createPool({
     connectionLimit: 10,
     host: process.env.MYSQL_HOST,
     user: process.env.MYSQL_USER,
     password: process.env.MYSQL_PASSWORD,
     database: process.env.MYSQL_DB_NAME

     /* no encuentro diferencias de nomrbe, sera que el mamp y el wamp tienen propiedades distintas? */
 })
 pool.query = util.promisify(pool.query);

 module.exports=pool; 
/* esto no cambia de color, sera esto? */


 