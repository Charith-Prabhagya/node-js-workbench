var http = require('http');
var module1 = require('./module1');

function onRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(module1.myVariable);
    module1.myFunction();
    res.end();
}

http.createServer(onRequest).listen(8080);