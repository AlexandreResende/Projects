
$(document).ready(function(){

	$('.soundBox').hover(function(){

		var color = $(this).css('background-color');
		var newColor = color.split(',');
		newColor[3] = ' 1)';
		newColor.join(',');

		$(this).css('background-color', newColor);
	}, function(){

		var color = $(this).css('background-color');
		var newColor = color.split(',');
		newColor[2] = newColor[2].substring(0, newColor[2].length-1) + ', 0.2)';
		newColor = String(newColor.join(','));
		newColor = 'rgba' + newColor.substring(3);


		$(this).css('background-color', newColor);
	});

	$('.soundBox').on('click', function(){
		console.log($(this).children());
		$(this).children()[0].currentTime = 0;
		$(this).children()[0].play();
	});

});