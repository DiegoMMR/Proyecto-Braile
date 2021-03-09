var num = false;
//Funcion para buscar la imagen;
function getImage(name) {
	return `<img src = 'img/${name}.jpg' class="image"/><div class="overlay"><div class="text">${name}</div></div>`
}
//funcion para convertir los textos deseados en braile.
function convertir() {
	var letras = document.getElementById('input_text').value;
	//SPLIT SIRVE PARA  SEPARAR UNA CADENA DE STRINGS. CADENA.SPLIT(SEPARADOR)
	var lista = letras.split("");

	var html = ""
	//LISTA.LENGTH.. ADQUIERE EL VALOR  TODAR DE LOS DATOS INGRESADOS.
	//ESTO SIGNIFICA QUE EL FOR VA REPETIRSE DEPENDIENDO DE LAS LETRAS INGRESADAS.
	for (var i = 0; i < lista.length; i++) {
		//IF PARA SABER LOS ESPACIOS EMTRE LETRAS
		if (lista[i] == " ") {
			html += "<span class='img-container'><p>  </p>  </span>"
			num = false;
		}
		//LOS ASTERISCOS
		else if (lista[i] == "*") {
			var currentDiv = document.getElementById("output_text")
			html += "<span class='img-container'>" + getImage("asterisco") + "</span>"
			num = false;
		}
		//CIERRE DE INTERROGACION
		else if (lista[i] == "?" || lista[i] == "¿") {
			var currentDiv = document.getElementById("output_text")
			html += "<span class='img-container'>" + getImage("ininterrogacion") + "</span>"
			num = false;
		}
		else if (lista[i] >= "A" && lista[i] <= "Z") {
			var currentDiv = document.getElementById("output_text")
			html += "<span class='img-container'>" + getImage("mayus") + "</span>"
			html += "<span class='img-container'>" + getImage(lista[i]) + "</span>"
			num = false;
		}
		else if (lista[i] >= "0" && lista[i] <= "9") {
			var currentDiv = document.getElementById("output_text")
			if (num == false) {
				html += "<span class='img-container'>" + getImage("num") + "</span>"
				num = true;
			}
			html += "<span class='img-container'>" + getImage(lista[i]) + "</span>"
		} else if (lista[i] == /"/) {
			var currentDiv = document.getElementById("output_text")
			html += "<span class='img-container'>" + getImage("comiillas") + "</span>"
			num = false;
		} else if (lista[i] == ":") {
			var currentDiv = document.getElementById("output_text")
			html += "<span class='img-container'>" + getImage("2puntos") + "</span>"
			num = false;
		}
		//PARA LETRAS.
		else {
			var currentDiv = document.getElementById("output_text")
			html += "<span class='img-container'>" + getImage(lista[i]) + "</span>"
		}

	}
	//IMPRIME LOS DATOS QUE INGRESAN.
	currentDiv.innerHTML = "<div id='paginacion'>" + html + "</div>";

	"<link rel='stylesheet' type='text/css' href='css/Braile.css' media='screen'/>"
}

