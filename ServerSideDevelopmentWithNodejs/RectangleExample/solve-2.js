
var rect = require('./rectangle-2');

function solveRect(h, w){

	console.log('Solving for rectangle with l = ' + h + ' and b = ' + w);

	rect(h, w, function(error, rectangle){

		if(error){
			console.log(error);
		} else {
			console.log('The area of a rectangle of dimensions length = ' + h +
					' and breath = ' + w + ' is ' + rectangle.area(h,w));
			console.log('The perimeter of a rectangle of dimensions length = ' + h +
					' and breath = ' + w + ' is ' + rectangle.perimeter(h,w));
		}
	});

};

solveRect(10, 1);
solveRect(20, 2);
solveRect(30, -1);