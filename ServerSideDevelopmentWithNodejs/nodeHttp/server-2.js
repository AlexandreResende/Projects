
var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	localhost = 'localhost',
	port = 3000;

var server = http.createServer(function(request, response){

	console.log('request for ' + request.url +
				' by method ' + request.method);

	if (request.method === 'GET'){

		var fileUrl;

		if (request.url === '/') fileUrl = '/index.html';
		else fileUrl = request.url;

		var filePath = path.resolve('./public' + fileUrl);

		var fileExt = path.extname(filePath);

		if (fileExt === '.html'){

			fs.exists(filePath, function(exists){
				if (!exists){
					response.writeHead(404, {'Content-Type': 'text/html'});
					response.end('<h1>Error 404 page ' + fileUrl + ' not found</h1>');
					return;
				}

				response.writeHead(200, {'Content-Type':'text/html'})
				fs.createReadStream(filePath).pipe(response);

			});

		} else {
			response.writeHead(404, {'Content-Type': 'text/html'});
			response.end('<h1>Error 404 page ' + fileUrl + ' not a html</h1>');
		}

	} else {
		response.writeHead(404, {'Content-Type': 'text/html'});
		response.end('<h1>Error 404 page ' + request.method + ' not found</h1>');
	}

});

server.listen(port, localhost, function(){
	console.log('Server up and running!');
});