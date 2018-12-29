// express assignment

// create npm project and install express js and nodemon

// create express app
// funnels the requests though 2 or 3 middleware functions that 
// log to the console and return one response

// handle requests to / and /users 
// make sure they dont use each other


const http = require('http')

const express = require('express') // get the express npm package

const app = express() // set up a new express app

// routes

// app.use('/', (req, res, next) => {
//     console.log('(1) Maybe check each request if the user is logged in or somehting...');
//     next();
// })

// app.use('/', (req, res, next) => {
//     console.log('(2) Home page route that returns a html response...')
//     res.send(`
//         <h1>Home</h1>
//         <p>Welcome to the express app</p>
//     `)
// })

app.use('/users', (req, res, next) => {
    // return html user list
    // res.send(`
    //     <ul>
    //         <li>User 1</li>
    //         <li>User 2</li>
    //         <li>User 3</li>
    //     </ul>
    // `)

    //return json list
    res.send({
        "users": [
          {
            "id": 0,
            "name": "Dan"
          },
          {
            "id": 1,
            "name": "Jon"
          },
          {
            "id": 2,
            "name": "Jane"
          }
        ]
    })
})

app.use('/', (req, res, next) => {
    res.send(`
        <h1>User Home</h1>
        <a href="/users" title="See a lost of all users">All Users</a>
    `)
})



// server
const server = http.createServer(app) // pass expres app to node server

server.listen('3000') // make the server listen n port 3000
