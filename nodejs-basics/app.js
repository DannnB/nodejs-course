const http = require('http');

const routes = require('./routes');

console.log(routes.someText)

const server = http.createServer(routes.handler);

server.listen(3000);

console.log(`Server running on port 3000`);

// https://github.com/DannnB/nodejs-course.git

