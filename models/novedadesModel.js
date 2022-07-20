var pool = require('./bd');

async function getNovedades() {
    var query ='select * from novedades order by id DESC';
    var rows = await pool.query(query);
    return rows;
    
}

async function insertNovedades(obj){
    try{
var query = 'insert into novedades set ?'
var rows = await pool.query(query, [obj]);
return rows
    }catch(error){
        console.log(error);
        throw error;
    }
}
async function deleteNovedadByID(id){
        var query = 'delete from novedades where id =?';
        var rows = await pool.query(query, [id]);
        return rows;

    }
/* esta funcion me tare la novedad y el contenido */
async function getNovedadesByID(id) {
var query = 'select * from novedades where id=?';
var rows = await pool.query(query, [id]);
return rows[0];    
}

async function modificarNovedadByID(obj, id){
    try {
        var query = 'update novedades set ? where id=?'
        var rows = await pool.query(query, [obj, id]);
        return rows
        
    } catch (error) {
        throw error;
        /* console.log(error) */
    }
}

module.exports = {getNovedades, insertNovedades, deleteNovedadByID, getNovedadesByID, modificarNovedadByID}