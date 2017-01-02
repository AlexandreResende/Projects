
var rect = require('./rectangle-1');

function solveRect(l, b){
	console.log('Solving for rectangle with l = ' + l + ' and b = ' + b);

	if (l < 0 || b < 0){
		console.log('Rectangle dimensions should be greater than zero.');
	} else {
		console.log('The area of a rectangle of dimensions length = ' + l +
					' and breath = ' + b + ' is ' + rect.area(l,b));
		console.log('The perimeter of a rectangle of dimensions length = ' + l +
					' and breath = ' + b + ' is ' + rect.perimeter(l,b));
	}
}

solveRect(10, 1);
solveRect(20, 2);
solveRect(30, -1);