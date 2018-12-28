const serverPort = '3000';

const http = require('http');

const routes = require('./routes/routes');

// set up server
const server = http.createServer(routes.handler);

// run server on port 3000
server.listen(serverPort);


console.log(`Server running on port ${serverPort}`)



// set up server port 3000
