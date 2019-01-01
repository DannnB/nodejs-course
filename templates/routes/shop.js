const path = require('path')
const express = require('express')

const rootDir = require('../util/path')
const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
    // will use default templating engine and return the template
    // by default /views is default
    const products = adminData.products
    res.render('shop', {prods: products, docTitle: 'Shop'}) // add products as prods
});

module.exports = router