function obtenerMensaje(){
	var textarea = document.getElementById("message");
	return textarea.value;
}

function crearDiv(mensaje){
	var div = document.createElement("div");
	div.className = "mensaje";
	div.innerHTML = "<input type='checkbox' class='seleccionador' onclick='marcarTexto(this)'/><p class='texto'>"+mensaje+"</p><i class='glyphicon glyphicon-trash pull-right' aria-hidden='true' onclick='eliminarDiv(this)'></i>";
	return div;
}

function limpiarTextarea(){
	var textarea = document.getElementById("request");
	textarea.value = "";
}

function sendMensaje(){
	var mensaje = obtenerMensaje();
	if(mensaje !==""){
		crearDiv(mensaje);
		clean();
	}
	var div = crearDiv(mensaje);
	var contenedor = document.getElementById("request");
	contenedor.appendChild(div);
	limpiarTextarea();
}

function clean(){
	var textarea = document.getElementById("message");
	textarea.value = "";
	textarea.focus(); 
}
function marcarTexto(elemento){
	var marcado = elemento.checked;
	var textoPorMarcar = elemento.nextSibling;
	if(marcado == true){
		textoPorMarcar.className = "subrayado";
	}else{
		textoPorMarcar.className = "";
	}
}

function eliminarDiv(elemento){
	var div = elemento.parentElement;
	div.remove();
}