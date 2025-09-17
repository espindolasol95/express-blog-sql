//creazione delle rotte (CRUD)
const express = require('express')
const router = express.Router()
//importare il controller
const postsController = require('../controllers/postsControllers')
// index
 router.get('/', postsController.index)
// show
 router.get ('/:id', postsController.show)
//create 
 router.post('/',postsController.create)
//update
router.put('/:id',postsController.update)
//modify
 router.patch('/:id', postsController.modify)
//destroy
 router.delete('/:id',postsController.destroy)

 module.exports = router
 