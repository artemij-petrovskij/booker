const Book = require('../models/books.model')

module.exports.getAllCollection = async (req, res) => {
  const AllCollection = await Book.find({})
  res.status(200).json(AllCollection)
}


module.exports.addNewBook = async (req, res) => {
  try {
    await Book.create({
        title: req.body.label,
        author: req.body.text,
        img: req.body.img
    })
    res.status(201).send()
}
catch (e) {
    console.log(e)
}
}