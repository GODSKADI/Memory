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
var helpCount = 0;

function help(c){
	if(helpCount < 3){
		countCart = countCart + 5;
		document.getElementById("count").innerHTML = countCart;
		var i = 0;
		while (i < c){
			var hint = document.getElementById("cart"+i+"").className;
			if (hint != "activeCart"){
				frontCart(i);
			}
			i++;
		}
		setTimeout(function(){flipHelp(c);}, 3000);
		helpCount++;
	}
}
//function de la ayuda cuando se pulse el boton... timer para dar la buelta.
function flipHelp(c){
	var i = 0;
	while (i < c){
		var hint = document.getElementById("cart"+i+"").getAttribute("onclick");
		if (hint != null ){
			backCart(i);
		}
		i++;
	}
}
//funcion cronometro
function clock(){
	secondsCount = 0;
	minutesCount = 0;
	seconds = document.getElementById("seconds");
	minutes = document.getElementById("minutes");

	chrono = setInterval(function(){
		if(secondsCount == 60){
			secondsCount = 0;
			minutesCount++;
			minutes.innerHTML = minutesCount;
			if(minutesCount == 60){
				minutesCount = 0;
			}
		}
		seconds.innerHTML = secondsCount;
		secondsCount++;
	},1000)
}
//funcion que llama a otras funciones y hace comprobacion
var onlionce = 0;
function girar(c, totalCeldas){
	if (onlionce == 0){
		alert("ha entrado")
		clock();
		onlionce++;
	}
	document.getElementById("giro").play();
	if (ids.length == 0){
		frontCart(c);
		saveIds(c);
		var divElement = document.getElementById("cart"+c+"").childNodes[1].childNodes[0].getAttribute('src');
		carts.push(""+divElement+"");

	}
	else if (ids.length == 1){
		frontCart(c);
		saveIds(c);
		var divElement = document.getElementById("cart"+c+"").childNodes[1].childNodes[0].getAttribute('src');
		carts.push(""+divElement+"");
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
	if (countCart == totalCeldas){
		alert("Good 4 you");
	}
}
