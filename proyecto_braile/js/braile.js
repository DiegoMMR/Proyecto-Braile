//Funcion para buscar la imagen;
function getImage (name) {
	return "<img src = 'img/" + name + ".jpg'/>" + name
}
//funcion para convertir los textos deseados en braile.
function convertir () {
	//CONSOLE.LOG sirve para debugiar una pagina
    console.log("clic en boton")
    //DOCUMENT.GETELEMENTBYID sirva para adquirir el valor de algun objeto.
var letras = document.getElementById('input_text').value;
    console.log(letras);
    //SPLIT SIRVE PARA  SEPARAR UNA CADENA DE STRINGS. CADENA.SPLIT(SEPARADOR)
var lista = letras.split("");

 var html = ""
 //LISTA.LENGTH.. ADQUIERE EL VALOR  TODAR DE LOS DATOS INGRESADOS.
 //ESTO SIGNIFICA QUE EL FOR VA REPETIRSE DEPENDIENDO DE LAS LETRAS INGRESADAS.
for (var i = 0; i < lista.length ; i++) {
	console.log(lista[i])
	//IF PARA SABER LOS ESPACIOS EMTRE LETRAS
	if (lista[i] == " "){
		html+= "<span class='izquierda'><p>  </p>  </span>"
	}
	//LOS ASTERISCOS
	else if (lista[i] == "*") {

		html+= "<span class='izquierda'>" + getImage("Asterisk")+ "</span>"
		console.log(lista)
	}
	//CIERRE DE INTERROGACION
		else if (lista[i] == "?") {

		html+= "<span class='izquierda'>" + getImage("fininterrogacion")+ "</span>"
		console.log(lista)
	}
	//PARA LETRAS.
	else {
	var currentDiv = document.getElementById("output_text")
	html+=  "<span class='izquierda'>" + getImage(lista[i]) + "</span>"
}

}
//IMPRIME LOS DATOS QUE INGRESAN.
currentDiv.innerHTML= "<div id='paginacion'>" + html + "</div>";

"<link rel='stylesheet' type='text/css' href='css/Braile.css' media='screen'/>"
}

