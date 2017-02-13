
function timingClock(){
	var date = new Date();
	
	var hour = (date.getHours() > 9) ? date.getHours() : "0" + date.getHours();
	var min = (date.getMinutes() > 9) ? date.getMinutes() : "0" + date.getMinutes();
	var sec = (date.getSeconds() > 9) ? date.getSeconds() : "0" + date.getSeconds();

	document.getElementById("container").innerHTML = hour + ":" + min + ":" 
		 + sec;

}

function currentTime(){
	setInterval(timingClock, 1000);
}