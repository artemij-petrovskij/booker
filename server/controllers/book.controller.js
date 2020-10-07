const Book = require('../models/books.model')

module.exports.getAllCollection = async (req, res) => {
  const AllCollection = await Book.find({})
  res.status(200).json(AllCollection)
}

module.exports.addNewBook = async (req, res) => {
  try {
    console.log()
    await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      img: req.body.img
    })
    res.status(201).send()
  }
  catch (e) {
    console.log(e)
  }
}

module.exports.showSingleBook = async (req, res) => {
  console.log(req.body)
  const AllCollection = await Book.find({})
  res.status(200).json(AllCollection)
}