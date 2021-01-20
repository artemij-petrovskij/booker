const Book = require('../models/books.model')

module.exports.getAllCollection = async (req, res) => {
  const AllCollection = await Book.find({})
  res.status(200).json(AllCollection)
}

module.exports.addNewItem = async (req, res) => {
  try {
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

module.exports.showSingleItem = async (req, res) => {
  const single = await Book.find({ _id: req.body.id })

  res.status(200).json(single)
}

module.exports.editSingleItem = async (req, res) => {
  try {
    const single = await Book.findOneAndUpdate({ _id: req.body.id }, {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      img: req.body.img
    })
    single.save()

    res.status(201).send()
  }
  catch (e) {
    console.log(e)
  }
}

module.exports.deleteSingleItem = async (req, res) => {
  try {
    console.log(req.body.id)
    await Book.deleteOne({ _id: req.body.id })
    res.status(201).send()
  }
  catch (e) {
    console.log(e)
  }
}


