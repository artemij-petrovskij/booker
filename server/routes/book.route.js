const { Router } = require('express')
const router = Router()
const { getAllCollection, addNewBook} = require('../controllers/book.controller')

router.get('/books', getAllCollection)

router.post('/add', addNewBook)

module.exports = router
