const db = require('../data/db');


//INDEX: restituisce la lista di tutti i post
exports.index = (req, res) => {
const sql= 'SELECT *FROM posts'

db.query (sql,(err, results) => {
  if(err) return res. status(500).json ({error: 'errore durante l esecuzione della query:' +err.message }) 
  
    res.json(results);
  })
}
//SHOW: restituisce i detagli di un singolo post
exports.show = (req, res) => {
    const id = parseInt(req.params.id)

    const sql= 'SELECT * FROM post WHERE id=?'
    db.query (sql, [id], (err, result) => {

      if (err){
        return res. status (500).json ({error: 'errore durante il recupero del post: ' +err  });
      }

    if (results.length === 0) {
      return res. status (404).json ({message: 'post non trovato'})
    
    
    }
    res.json (results [0]) 
    })
  
}

//STORE: crea un nuovo post
exports.create = (req, res) => {
   const newId = posts [posts.length -1 ].id + 1
 const { titolo, contenuto, immagine, tags } = req.body

 //nuovo oggetto da salvare
 const newPost = {
    id: newId,
    titolo,
    contenuto,
    immagine,
    tags
  }
   posts.push(newPost)
   res.status(201).json(newPost)

}

//UPDATE:modifica totale
exports.update = (req, res) => {
  const id = req.params.id;
  const { titolo, contenuto, immagine, tags } = req.body
  //recupero il post con l'id passato come parametro
  const post = posts.find(item => item.id === parseInt (id))
   post.titolo = titolo
   post.contenuto = contenuto
   post.immagine = immagine
   post.tags = tags 
  res.send(posts)
}

//MODIFY:modifica parziale, modifica solo alcuni campi del post

exports.modify = (req, res) => {
  const id = req.params.id;
  res.send(`modifica PARZIALE del post ${id}`)
}

//DESTROY: cancella un post
exports.destroy = (req, res) => {
  const id = parseInt(req.params.id)

  const sql = 'DELETE FROM posts WHERE id=?'
  db.query (sql, [id], (err, result) => {
     if (err) {
      return res.status(500).json({ error: 'Errore durante l\'eliminazione del post: ' + err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Post non trovato' });
    }

    return res.status(204).send();
    
  

})

}