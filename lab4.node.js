const http = require('http');
const fs = require('fs');
const connection = require('net');
const dotenv = require('dotenv');
dotenv.config(); 
const file = process.env.PATHC + process.env.NAME + process.env.FORMAT;
console.log(`PATH = ${process.env.PATHC}`);
//const resp = require('');
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.write(fs.readFileSync("./src/index.html"));
        var info = req.statusCode + " " + req.method + " " + req.headers.host + " " + req.headers.connection;
        fs.writeFileSync(file,info);
        res.end();
}).listen(8000);