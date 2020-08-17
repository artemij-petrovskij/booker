const {Schema, model} = require('mongoose')

const books = new Schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    img:{
        type: String
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

})

module.exports = model('Course', books)
