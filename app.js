//importo express
const express = require('express');

//chiamo la funzione express e restituisco il valore in una variabile app
const app = express();

//definisco la porta
const port= 3000;

// Per leggere i body in formato JSON
app.use(express.json()); 

//inserisco il middleware per  i file statici 
app.use(express.static ('public'));

// Importo i middleware personalizzati
const errorHandler = require('./middlewares/errorHandler')
const notFound = require('./middlewares/notFound')

//Importi il router delle rotte /posts
const postRouters = require('./routers/postsRoutes.js')

//utilizo il file routers per definire le ruote dei posts
app.use('/posts', postRouters)

//definisco la rotta entry point della nostra app
app.get('/', (req, res)=> {
    res.send('server del mio blog');
});

//middleware per rotte non trovate (va DOPO le rotte)
app.use(notFound);

// middleware per la gestione degli errori (va SEMPRE alla fine)
app.use(errorHandler);

//dico alla mia app di restare in ascolto sulla porta 3000 definita sopra 
app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`);
});


module.exports = app;





//bacheca che restituisce i posts
 //app.get ('/bacheca', (req, res) => {
   // res.json(posts);
// });



 


