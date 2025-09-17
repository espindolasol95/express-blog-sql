// MILESTONE 1


//importo l'array dalla cartella data
let posts = require('../data/postsData.js')  //verrà usato nella millestone 2 

//INDEX: restituisce la lista di tutti i post
exports.index = (req, res) => {
const tag = req.query.tag
//definisco l'array
let filteredPost = posts
//controllo il valore title se è diverso a undefined esseguo il filtraggio
if (tag){

  filteredPost = posts.filter(item => item.tags.includes(tag))
}
    res.json(filteredPost);
}
//SHOW: restituisce i detagli di un singolo post
exports.show = (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find (p => p.id === id)

    if (!post) {
    return res.status(404).json({ message: 'Post non trovato' });
    
  }
  res.json(post)

}

//STORE: crea un nuovo post
exports.create = (req, res) => {
   const newId = [posts.length -1 ].id+1
 const { titolo, contenuto, immagine, tags } = req.body

 //nuovo oggetto da salvare
 const newPost = {
    id: newId,
    titolo,
    contenuto,
    imagine,
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
  const post = post.find(item => item.id === id)
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

  const index = posts.findIndex (p => p.id === id)
   if (index !== -1) {
    posts.splice(posts.indexOf(posts), 1);

    console.log(posts);

    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Post non trovato' });
  }

}

