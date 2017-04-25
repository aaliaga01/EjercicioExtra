function convertirCelsius(valor){
	var result;
	if (valor == "Celsius"){
		result = document.getElementById("celsius").value * 9/5 + 32;
		document.getElementById("fahrenheit").value=Math.round(result);
	} else {
		result = (document.getElementById("fahrenheit").value -32) * 5 / 9;
        document.getElementById("celsius").value = Math.round(result);
	}
}