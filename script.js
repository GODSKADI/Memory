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
/*function clock(c){
	var hundredths = 0;
	var seconds = 0;
	var minutes = 0;
	var hours = 0;
	function clockStart(c){
		control = setInterval(chronometer, 10);
		document.getElementById("cart"+c+"").disabled = true;
	}
	function clockStop(c){
		clearInterval(control);
		document.getElementById("cart"+c+"").disabled = true;
	}
	function chronometer(){
		if(hundredths < 99){
			hundredths++;
			if (hundredths < 10){hundredths = "0" + hundredths}
			hundredths.innerHTML = ":" + hundredths;
		}
		if(hundredths == 99){
			hundredths = -1;
		}
		if(hundredths == 0){
			seconds ++;
			if(seconds < 10 ){seconds = "0" + seconds}
			seconds.innerHTML = ":" + seconds;
		}
		if(seconds == 59){
			seconds = -1;
		}
		if ((hundredths == 0) && (seconds == 0)){
			minutes ++;
			if (minutes < 10){minutes = "0" + minutes}
			minutes.innerHTML = ":" + minutes;	
		}
		if (minutes == 59){
			minutes = -1;
		}
		if ((hundredths == 0) && (seconds == 0) && (minutes == 0)){
			hours ++;
			if (hours < 10){hours = "0" + hours}
			hours.innerHTML = hours;
		}
	}
}*/
//funcion que llama a otras funciones y hace comprobacion
function girar(c, totalCeldas){
	//clock(c);
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
