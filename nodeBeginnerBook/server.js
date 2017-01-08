//importing http module
//makes http an object that carries all
//the public methos the http modules provide
var http = require("http");
var url = require("url");

console.log("Server up and running.");

function start(route, handle){
	function onRequest(request, response){

		var pathname = url.parse(request.url).pathname;
		console.log("Requested for " + pathname + " received.");
		
		route(handle, pathname, response, request);
	}	
	http.createServer(onRequest).listen(8888);
}

exports.start = start;

