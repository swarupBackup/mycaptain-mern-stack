const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

// Body Parser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

// DB Config 
const db = require('./config/keys').mongoURI

// Connect to mongodb

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => { console.log('Connected to DB...') })
    .catch(err => { console.error(`Error: ${err}`) })

const port = process.env.PORT || 3000

app.listen(port, () => { console.log(`Server running on port ${port}`) })