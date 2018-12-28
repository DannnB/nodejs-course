// routes
    // "/" - return greeting text just text
    // "/users" - return a list of dummy users in html <ul<li>user 1</li></ul> 
    // "/create-user" - return the parsed data and return in a console.log and redirect to "/"

// add form with a "username" <input> to the "/" page and submit a POST request to "/create-user" upon a button click


const requestHandler = (req, res) => {
    // console.log(req);

    const url = req.url;
    const requestMethod = req.method; // eg. POST, GET
    
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>'); 
        res.write('<head><title>Add a user</title></head>'); 

        // create the view
        res.write(`
            <body style="font-family: 'sans-serif';">
                <h1>Add User</h1>
                <p>Please add a user below...</p>
                <form action="/create-user" method="POST">
                    <input type="text" name="username">
                    <button type="submit">Add User</button>
                </form>
                <a href="/users" title="See all users">See all users</a>
            </body>`
        ); 
        // finish creating the view
        
        res.write('</html>'); 
        return res.end();
    };

    // redirect if the user does a get request to /create-user
    if(url === '/create-user' && requestMethod === 'GET') {
        res.statusCode = 301;
        res.setHeader('Location', '/');
        return res.end();
    }

    // create the user submitted by the form
    if(url === '/create-user' && requestMethod === 'POST') {
        const body = [];

        //
        // I still find the understanding of the below req.on() hard
        //
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // output the created username
            console.log(parsedBody.split('=')[1]);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }

    if(url === '/users') {
        // return list
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>All Users</title></head>'); 
        res.write(`
            <body style="font-family: 'sans-serif';">
                <h1>All Users</h1>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                    <li>User 4</li>
                    <li>User 5</li>
                </ul>
                <a href="/" title="Add a new user">Add User</a>
            </body>
        `);
        res.write('</html>');
        return res.end();
    }
}

exports.handler = requestHandler;