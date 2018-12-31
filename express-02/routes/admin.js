const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

// '/add-product' will match before the catch all of '/'
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // won't go any further than this as this middleware is met
});

// only accept post requests to this url, can also add .get to do something else as wel
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    
    // after return user to home
    res.redirect('/')
})

module.exports = router