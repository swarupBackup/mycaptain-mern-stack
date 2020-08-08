const express = require('express')
const router = express.Router()
const { User, validate } = require('../models/user')
const mongoose = require('mongoose')

router.post('/', async (req, res) => {
    const { error } = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    const email = User.findOne({ email: req.body.email })
    if(email) return res.status(400).send('User already exists!') 
    const user = await User({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    })
    await User.create(user)
    res.send(user)
})

module.exports = router