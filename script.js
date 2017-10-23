//variables
var cartas = [];
var ids = [];
var countCart = 0;
var totalCountCart = 3;
//funciones
//funcion que pone la carta de frente
function frontCart(c){
	var seleccion = document.getElementById("cart"+c+"");
	seleccion.className = "activeCart";
}
//funcion que pone la carta del reves
function backCart(c){
	var seleccion = document.getElementById("cart"+c+"");
	seleccion.className = "cart";
}
//funcion que guarda las id's de las cartas
function saveIds(c){
	ids.push(c);
}
//funcion que cuenta los turnos
function turnCount(){
	var count = document.getElementById("count").innerHTML;
	count++;
	document.getElementById("count").innerHTML = count;
}
//funcion que bloquea las cartas que estan correctas.
function blockCart(c){
	document.getElementById("cart"+c+"").removeAttribute("onclick");
}
//funcion que añade sonido cuando se hace click
function repSound(){
	var sonido = document.getElementById(?);
	sonido.play("sounds/sound.mp3"); //falta entender un par de cosas lo (?)
}
//funcion que llama a otras funciones y hace comprobacion
function girar(c){
	if (ids.length == 0){
		frontCart(c);
		saveIds(c);
		var divElement = document.getElementById("cart"+c+"").childNodes[1].childNodes[0].getAttribute('src');
		cartas.push(""+divElement+"");	
	}
	else if (ids.length == 1){
		frontCart(c);
		saveIds(c);
		var divElement = document.getElementById("cart"+c+"").childNodes[1].childNodes[0].getAttribute('src');
		cartas.push(""+divElement+"");
		if (cartas[0] == cartas[1]){
			turnCount();
			countCart++;
		}
		else{
			var id1 = ids[0];
            var id2 = ids[1];
            setTimeout(function(){backCart(id1);}, 2000);
            setTimeout(function(){backCart(id2);}, 2000);
            turnCount();
		}
		cartas = [];
		ids = [];
	}
}
