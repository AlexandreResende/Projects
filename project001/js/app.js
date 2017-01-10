$(document).ready(function(){

	var stackLength = 0;
	//avoid magic numbers
	var stackSizeLimit = 10;

	$('#addElement').on('click', function(){

		var element = $('#elementInput').val();
		//var element = document.getElementById('elementInput').value;

		if (element){

			if (stackLength <= stackSizeLimit){

				//creating the stackDiv element
				var newDiv = $('#stackHolder').prepend('<div class="stack">'+element+'</div>')

				//getting the length of the stack holder
				stackLength = $('#stackHolder').children().length;

				//erasing the content of the input
				$('#elementInput').val('');

				//getting the length of the stackHolder div
				$('span').text(stackLength);
				
			} else {

				alert('Stack size limit reached!');

			}

		} else {

			alert('Please type a number!');

		}
		
	});

	$('#removeElement').on('click', function(){

		var stackLength = $('#stackHolder').children().length;

		$('#stackHolder').children().first().remove();
		stackLength = $('#stackHolder').children().length;
		$('span').text(stackLength);

	});

	$('#clearStack').on('click', function(){

		$('#stackHolder').children().remove();
		stackLength = $('#stackHolder').children().length;
		$('span').text(stackLength);

	});

});

