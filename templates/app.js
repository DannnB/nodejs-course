const path = require('path')

const express = require('express');
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views') // set to the views folder
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// app.use((req, res, next) => {
    //for each request
//     console.log('In the middleware')
//     next(); // allows the request to continue to the next middleware in line
// });

// calls next and intercepts all requests even GET requests...
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
// order still matters
// apart from when using .get .post as it matches more
app.use('/admin', adminData.routes)
app.use(shopRoutes)

// '/' as default as a catch all in this case
app.use((req, res, next) => {
    res.status(404)
    res.sendFile(path.join(__dirname, 'views', '404.html'))
    // next(); // allows the request to continue to the next middleware in line
})

app.listen(3000);

// https://github.com/DannnB/nodejs-course.git

