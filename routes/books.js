const express = require('express')
const router = express.Router()
const Book = require('../models/book')

//all Books route
router.get('/', async (req, res) => {
    res.send('All Book')
})

//new route
router.get('/new', (req, res) => {
    res.send('New Book')
})

//create route
router.post('/', async (req, res) => {
    res.send('Create Book')
})

module.exports = router