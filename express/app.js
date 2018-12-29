const http = require('http');

const express = require('express');

const app = express();

// app.use((req, res, next) => {
    //for each request
//     console.log('In the middleware')
//     next(); // allows the request to continue to the next middleware in line
// });

app.use('/', (req, res, next) => {
    console.log('this always runs')
    next(); // allows the request to continue to the next middleware in line
})

// '/add-product' will match before the catch all of '/'
app.use('/add-product', (req, res, next) => {
    console.log('add product middleware');
    res.send('<h1>Add New Product</h1>');
    // won't go any further than this as this middleware is met
});
app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>hello</h1>')
});

const server = http.createServer(app);

server.listen(3000);

console.log(`Server running on port 3000`);

// https://github.com/DannnB/nodejs-course.git

