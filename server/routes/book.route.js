const { Router } = require('express')
const router = Router()
const { getAllCollection, addNewBook, showSingleBook} = require('../controllers/book.controller')

router.get('/books', getAllCollection)

router.post('/add', addNewBook)

router.post('/single', showSingleBook)

module.exports = router
