var http = require('http');
var hostname = 'ec2-52-40-161-188.us-west-2.compute.amazonaws.com';
var port = 8080;

var server = http.createServer(function (req, res){
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Connor Elford\n100232482\n');
});

server.listen(port, hostname, function() {
console.log('Server listening on port ' +port);
}); 