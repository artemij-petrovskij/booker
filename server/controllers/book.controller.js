const User = require('../models/books.model')

module.exports.getAllCollection = async (req, res) => {
  const AllCollection = await User.find({})

      res.status(201).json( AllCollection )




}
