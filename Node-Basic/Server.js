const http = require('http');
const port =3000;
const hostname = '127.0.0.1'

const myserver = http.createServer((req, res) => {
    res.end("<h1>hello ,Its Ela's server </h1>");
});

myserver.listen(port, hostname, () => {
    console.log(`server is running successful at http://${hostname}:${port}`);
});

// http.createServer((request, response) => {//ESC function users
//     response.end("i am your fast server");

// }).listen(3000);