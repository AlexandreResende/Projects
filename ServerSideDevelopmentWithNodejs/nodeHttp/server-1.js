
var http = require('http'),
	localhost = 'localhost',
	port = 3000;

var server = http.createServer(function(request, response){

	console.log(request.headers);

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<h1>Hello World</h1>');
});

server.listen(port, localhost, function(){
	console.log('Server up and running!');
});