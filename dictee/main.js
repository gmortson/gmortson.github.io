function checkValue() {
	var array = ["le ballon", "le carton", "un camion", "rond", "un ongle"]
	var value = document.getElementById("dictee").value.trim().toLowerCase();
	isInArray(value, array);
}
function isInArray(value, array) {
  	if (array.indexOf(value) > -1) {
 		$('#rightModal').modal('show');
    	var randomImages= new Array ("giphy.gif", "giphy1.gif", "giphy2.gif", "giphy3.gif", "");
    	var randomNumber = Math.floor((randomImages.length-1)*Math.random());
    	$('#correctImg').prop('src',randomImages[randomNumber]);
  	} else {
  		$('#tryAgainModal').modal('show');
  	};
}