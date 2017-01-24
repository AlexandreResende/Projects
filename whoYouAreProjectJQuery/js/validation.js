function validateForm(){
	for(var ans = 0; ans < myform.elements.length; ans++){
		if (myform.elements[ans].className == 'req' && myform.elements[ans].value.length == 0){
			alert('Please fill in all required fields!');
			return false;
		}
	}

	var email = document.getElementById('email').value;
	var atpos = email.indexOf('@');
	var dotpos = email.lastIndexOf('.');

	if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= x.length){
		alert('Please enter a valid email');
		return false;
	}
}