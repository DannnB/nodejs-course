const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // process.exit();

    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>'); 
        res.write('<head><title>My First Page</title></head>'); 
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'); 
        res.write('</html>'); 
        return res.end();
    }
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message.replace(new RegExp("\\+", "g"), ' '));       
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

server.listen(3000);

console.log(`Server running on port 3000`);