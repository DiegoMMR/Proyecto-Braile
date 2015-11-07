var num = false;
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
		num = false;
	}
	//LOS ASTERISCOS
	else if (lista[i] == "*") {
		var currentDiv = document.getElementById("output_text")
		html+= "<span class='izquierda'>" + getImage("asterisco")+ "</span>"
		console.log(lista)
		num = false;
	}
	//CIERRE DE INTERROGACION
		else if (lista[i] == "?" || lista[i] == "¿") {
			var currentDiv = document.getElementById("output_text")
		html+= "<span class='izquierda'>" + getImage("ininterrogacion")+ "</span>"
		console.log(lista)
		num = false;
	}
	else if (lista[i] >= "A" && lista[i] <= "Z") {
		var currentDiv = document.getElementById("output_text")
		html+= "<span class='izquierda'>" + getImage("mayus") + "</span>"
		html+= "<span class='izquierda'>" + getImage(lista[i])+ "</span>"
		console.log(lista)
		num = false;
	}
	else if (lista[i] >= "0" && lista[i] <= "9") {
		var currentDiv = document.getElementById("output_text")
		if (num == false){
		html+= "<span class='izquierda'>" + getImage("num") + "</span>"
		num = true;
		}
		html+= "<span class='izquierda'>" + getImage(lista[i]) + "</span>"
		console.log("Carlos")
	}	else if (lista[i] == /"/) {
		var currentDiv = document.getElementById("output_text")
		html+= "<span class='izquierda'>" + getImage("comiillas")+ "</span>"
		console.log(lista)
		num = false;
	}	else if (lista[i] == ":") {
		var currentDiv = document.getElementById("output_text")
		html+= "<span class='izquierda'>" + getImage("2puntos")+ "</span>"
		console.log(lista)
		num = false;
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

