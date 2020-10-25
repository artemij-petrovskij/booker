const { Router } = require('express')
const router = Router()
const { getAllCollection, addNewItem, showSingleItem, editSingleItem, deleteSingleItem} = require('../controllers/book.controller')

router.get('/books', getAllCollection)

router.post('/add', addNewItem)

router.post('/single', showSingleItem)

router.post('/edit', editSingleItem)

router.post('/delete', deleteSingleItem)

module.exports = router
