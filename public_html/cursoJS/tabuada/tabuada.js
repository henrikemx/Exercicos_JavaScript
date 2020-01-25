/**
* Aula 07: Tabuada
* @author: Prof José de Assis
*/

for (var i = 1; i < 11; i++){
	// document.write("=> " + valor + " x " + i + " = " + i * valor + "<br>")
	document.write("<p><s>Tabuada do " + i + "</s></p>");
	for (var j = 1; j < 11; j++){
		document.write(i + " x " + j + " = " + (i * j) + "<br>");
	}
}