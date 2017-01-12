$(document).ready(function(){

	var queueLength = 0;
	//avoid magic numbers
	var queueSizeLimit = 10;

	$('#addElement').on('click', function(){

		var element = $('#elementInput').val();
		//var element = document.getElementById('elementInput').value;

		if (element){

			if (queueLength <= queueSizeLimit){

				//creating the stackDiv element
				var newDiv = $('#queueHolder').append('<div class="queue">'+element+'</div>')

				//getting the length of the stack holder
				queueLength = $('#queueHolder').children().length;

				//erasing the content of the input
				$('#elementInput').val('');

				//getting the length of the stackHolder div
				$('span').text(queueLength);
				
			} else {

				alert('Queue size limit reached!');

			}

		} else {

			alert('Please type a number!');

		}
		
	});

	$('#removeElement').on('click', function(){

		var queueLength = $('#queueHolder').children().length;

		$('#queueHolder').children().first().remove();
		queueLength = $('#queueHolder').children().length;
		$('span').text(queueLength);

	});

	$('#clearQueue').on('click', function(){

		$('#queueHolder').children().remove();
		queueLength = $('#queueHolder').children().length;
		$('span').text(queueLength);

	});

});

