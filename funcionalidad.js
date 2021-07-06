function init(){
	//variables
	var resultado = document.getElementById('resultado');
	var reset = document.getElementById('reset');
	var suma = document.getElementById('suma');
	var resta = document.getElementById('resta');
	var multiplicacion = document.getElementById('multiplicacion');
	var division = document.getElementById('division');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var cero = document.getElementById('cero');
}


uno.onclick = function(e){
	resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e){
	resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
	resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
	resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
	resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e){
	resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
	resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
	resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e){
	resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function(e){
	resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function(e){
	resetear();
}


suma.onclick = function(e){
	resultado.textContent = resultado.textContent + "+";
}
resta.onclick = function(e){
	resultado.textContent = resultado.textContent + "-";
}
multiplicacion.onclick = function(e){
	resultado.textContent = resultado.textContent + "*";
}
division.onclick = function(e){
	resultado.textContent = resultado.textContent + "/";
}

igual.onclick = function(e){
	var res = eval(resultado.textContent);
	resultado.textContent = res;
}


function desdeTeclado(e){
	let code = e.charCode;
	console.log(code);
	
	// Este bloque de código es la funcionalidad extra de limpiar resultado luego de un enter
	let historial = 0;
	if (code == 13){
		historial = 13; //si se presiona enter se cambia historial a 13
	}
	if (historial == 13 && code != 13){
		//si presionamos otra tecla (cambia code) y en historial tenemos enter
		//limpiamos resultado y reseteamos historial
		resultado.textContent = "";
		historial = 0;
	}
	//---------------------------------------------------------------------------------------
	
	let caracter = String.fromCharCode(code);
	let caracteres_permitidos = ["1","2","3","4","5","6","7","8","9","0",".","/","*","-","+"];
	if (caracteres_permitidos.includes(caracter)){
		resultado.textContent = resultado.textContent + caracter;
	}
	else if (code == 13){
		let res = eval(resultado.textContent);
		resultado.textContent = res;
	}
	else if (code == 99){
		resultado.textContent = "";
	}
}

function resetear(){
	resultado.textContent = "";
}

document.onkeypress = desdeTeclado;
