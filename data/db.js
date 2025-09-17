// importo mysql2

const mysql = require ('mysql2'); 

//creo la connessione al db
const connection =  mysql.createConnection({

host:'localhost',
user:'root',
password:'root',
database:'express_blog_sql'

})

//instauro una connessione al db
connection.connect((err)=>{
    if (err){
        console.log ('errore di connessione',err)
    }else{
        console.log ('connessione data base riuscita')
        
    }

})
// esporto la connessione creata
module.exports = connection;