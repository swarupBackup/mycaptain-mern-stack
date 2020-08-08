const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/users')
const app = express()
app.use(express.json())
app.use('/api/register', users)

mongoose.connect('mongodb://localhost:27018/demoLogin')
    .then(() => console.log('Connected to DB...'))
    .catch(err => console.error(err))

app.listen(7001, () => { console.log('Started server on port 7001...') })