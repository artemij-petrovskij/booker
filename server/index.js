
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
/*
const getTask = require('./routes/posts')
const addTask = require('./routes/create')
const delTask = require('./routes/delete.js')
*/
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())



if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'))
    app.get(/.*/, (req, res) => res.sendFile(__dirname+'/public/index.html'))
}

const PORT = process.env.PORT || 3000
let PASS = process.env.MONGO_DB_PASS

if (!!!PASS) {
    const config = require('./config')
    PASS = config.password
}

async function start() {
    try {
        await mongoose.connect(`mongodb+srv://user1:${PASS}@cluster0-nmc55.mongodb.net/Bookshelf`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        app.listen(PORT, () => {
            console.log(`Server start on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()