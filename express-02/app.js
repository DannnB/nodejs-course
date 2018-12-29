const express = require('express');
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

// app.use((req, res, next) => {
    //for each request
//     console.log('In the middleware')
//     next(); // allows the request to continue to the next middleware in line
// });

// calls next and intercepts all requests even GET requests...
app.use(bodyParser.urlencoded({extended: false}))

// order still matters
// apart from when using .get .post as it matches more
app.use(adminRoutes)
app.use(shopRoutes)

// '/' as default as a catch all in this case
app.use((req, res, next) => {
    res.status(404)
    res.send('<h1>Page not found.</h1>')
    // next(); // allows the request to continue to the next middleware in line
})

app.listen(3000);

// https://github.com/DannnB/nodejs-course.git

