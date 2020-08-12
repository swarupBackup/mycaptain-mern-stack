const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const users = require('./routes/api/users')

const app = express()

// Bodyparser middleware

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

// DB config

const db = require('./config/keys').mongoURI

// connect to mongoDB

mongoose.connect(db, { useNewUrlParser : true })
    .then(() => console.log('Connected to DB...'))
    .catch( err => console.error('Error', err))


// Passport middleware

app.use(passport.initialize())

// Passport config

require('./config/passport')(passport)

// Routes
app.use("/api/users", users)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`))