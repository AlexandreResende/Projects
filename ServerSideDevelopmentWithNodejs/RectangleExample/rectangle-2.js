
module.exports = function(h, w, callback){

	try{

		if(h < 0 || w < 0){
			throw new Error('Rectangle dimensions should be greater than zero.');
		} else {
			callback(null, {
				perimeter: function(){
					return 2*(h+w);
				},
				area: function(){
					return h * w;
				}
			});
		}

	} catch (error){
		callback(error, null);
	}

}