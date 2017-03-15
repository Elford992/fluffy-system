var http = require('http');
var hostname = 'ec2-35-166-52-39.us-west-2.compute.amazonaws.com';
var port = 8080;

var server = http.createServer(function (req, res){
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});

server.listen(port, hostname, function() {
console.log('Server listening on port ' +port);
}); 