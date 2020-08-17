const { Router } = require('express')
const router = Router()
const { getAllCollection } = require('../controllers/book.controller')

router.get('/books', getAllCollection)





module.exports = router
