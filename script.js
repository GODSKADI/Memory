//variables
var carts = [];
var ids = [];
var countCart = 0;
var totalCountCart = 3;
//funciones
//funcion que pone la carta de frente
function frontCart(c){
	var selection = document.getElementById("cart"+c+"");
	selection.className = "activeCart";
}
//funcion que pone la carta del reves
function backCart(c){
	var selection = document.getElementById("cart"+c+"");
	selection.className = "cart";
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
//funcion de la ayuda cuando se pulse el boton giraran las cartas
function help(c){
	alert(c);
	var hint = document.getElementsByClassName("cart");
	while(hint.length > 0){
			hint[0].className = "activeCart";
			}
	var i = 0;
	while (i < c){
		var name = document.getElementById("cart"+i+"").className;
		if (name != "activeCart"){
			setTimeout(function(){flipHelp();}, 2000);
		}
		else{
		}
		i++;
	}
}
//function de la ayuda cuando se pulse el boton... timer para dar la buelta.
function flipHelp(){
	var hint = document.getElementsByClassName("activeCart");
	while(hint.length > 0){
		hint[0].className = "cart";
	}
}
/*function prueba(c){
	var name = document.getElementById("cart"+c+"").className;
	alert(name);
}*/

//funcion que llama a otras funciones y hace comprobacion
function girar(c){
	document.getElementById("giro").play();
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
		if (carts[0] == carts[1]){
			document.getElementById("good").play();
			turnCount();
			countCart++;
			var blockid1 = ids[0];
			var blockid2 = ids[1];
			blockCart(blockid1);
			blockCart(blockid2);
		}
		else{
			document.getElementById("bad").play();
			var id1 = ids[0];
            var id2 = ids[1];
            setTimeout(function(){backCart(id1);}, 2000);
            setTimeout(function(){backCart(id2);}, 2000);
            turnCount();
		}
		carts = [];
		ids = [];	
	}
}
