// importo mysql2

const mysql = require ('mysql2'); 

//creo la connessione al db
const conection =  mysql.createConnection({

host:'localhost',
user:'root',
password:'root',
database:'express_blog_sql'

})