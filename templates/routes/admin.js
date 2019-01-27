const path = require('path')

const express = require('express')

const adminData = require('./admin')

const rootDir = require('../util/path')

const router = express.Router()

const products = []

// '/add-product' will match before the catch all of '/'
router.get('/add-product', (req, res, next) => {
    const products = adminData.products
    res.render('add-product', {docTitle: 'Add Product', path: '/admin/add-product'})
    // won't go any further than this as this middleware is met
});

// only accept post requests to this url, can also add .get to do something else as wel
router.post('/add-product', (req, res, next) => {
    products.push({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    })
    // after return user to home
    res.redirect('/')
})

exports.routes = router
exports.products = products
