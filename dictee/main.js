function myFunction() {
	var array = ["le ballon", "le carton", "un camion", "rond", "un ongle"]
	var value = document.getElementById("dictee").value;
	var lvalue = value.toLowerCase();
	console.log(lvalue);
	isInArray(lvalue, array);
}
function isInArray(value, array) {
	console.log(array.indexOf(value));
  	if (array.indexOf(value) > -1) {
 		$('#rightModal').modal('show');
 		//Array of quotes
    	var randomImages= new Array ("giphy.gif", "giphy1.gif", "giphy2.gif", "giphy3.gif");

    	//Random number to select an image. Use 8, not 7, since javascript arrays are 0 based
    	//Math.floor will take us from a floating point number to an integer base
    	var randomNumber = Math.floor((randomImages.length-1)*Math.random());
    	console.log(randomNumber);

    	//Display that image
    	$('#correctImg').prop('src',randomImages[randomNumber]);
  	} else {
  		$('#tryAgainModal').modal('show');
  	};
}