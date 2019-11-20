var b = document.getElementsByClassName("grid-item"); //The number of boxes in the grid
var hehe = document.getElementById("gcon")
document.getElementById("button").addEventListener("click", boy);
var non = 0
var i = 0
var i2 = 0
var timeout = 1
var buttenable = false
var raudio
var rfunc
var rimage
var rdir
var gridx = 81
var gridy = 39
var assfuck = 0
var freakbutt = 3078
var total = gridx * gridy
var a = [
	new Audio('sounds/bep-01.mp3'),
	new Audio('sounds/bep-02.mp3'),
	new Audio('sounds/bep-03.mp3'),
	new Audio('sounds/bep-04.mp3'),
	new Audio('sounds/bep-05.mp3'),
	new Audio('sounds/bep-06.mp3'),
	new Audio('sounds/bep-07.mp3'),
	new Audio('sounds/bep-08.mp3'),
	new Audio('sounds/bep-09.mp3'),
	new Audio('sounds/bep-10.mp3'),
	new Audio('sounds/bep-11.mp3'),
	new Audio('sounds/bep-12.mp3'),
	new Audio('sounds/bep-13.mp3'),
	new Audio('sounds/bep-14.mp3'),
	new Audio('sounds/bep-15.mp3'),
	new Audio('sounds/bep-16.mp3'),
	new Audio('sounds/bep-17.mp3'),
	new Audio('sounds/bep-18.mp3'),
	new Audio('sounds/bep-19.mp3'),
	new Audio('sounds/bep-20.mp3'),
	new Audio('sounds/bep-21.mp3'),
	new Audio('sounds/bep-22.mp3'),
	new Audio('sounds/bep-23.mp3'),
	new Audio('sounds/bep-24.mp3'),
	new Audio('sounds/bep-25.mp3'),
	new Audio('sounds/bep-26.mp3'),
]
//var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

while (non !== total){					//creates the divs with the "grid-item" class
	var g = document.createElement("div");
	g.classList.add("grid-item")
	if (non < total){
		hehe.appendChild(g);
		//b[non].innerHTML = non;
		non++
	}
	if (non > total){
		hehe.removeChild(hehe.childNodes[non]);
		non--
	}
}

console.log(b.length, "Grid items");	//Prints the number of elements with "grid-item" class to the browser console

function boy(){
	if (buttenable == false){
		reset()
		buttenable = true;
		console.log("buttenable", buttenable)
	}
	
	else if (buttenable == true){
		buttenable = false;
		freakbutt = 3078
		assfuck = 0	
		i = 0
		console.log("buttenable", buttenable)
	}
	
	if (buttenable == true && i == 0){
		rfunc = Math.floor(Math.random() * 2)
		if(rfunc == 0){
			color()
		}
		if(rfunc == 1){
			reveal()
		}
	}
}

function color(){
	if (i == 0 && buttenable == true){rdir = Math.floor(Math.random() * 1)}
	
	if (i2 !== 1 && buttenable == true){
		
		raudio = Math.floor(Math.random() * 26)
		var red =  Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		var bgColor = "rgba(" + red + "," + green + "," + blue + ")";
		/*if (raudio == 0){b[i].style.backgroundColor = "#FF0000";}
		else if (raudio == 1){b[i].style.backgroundColor = "#FF2200";}
		else if (raudio == 2){b[i].style.backgroundColor = "#FF4400";}
		else if (raudio == 3){b[i].style.backgroundColor = "#FF6600";}
		else if (raudio == 4){b[i].style.backgroundColor = "#FF8800";}
		else if (raudio == 5){b[i].style.backgroundColor = "#FFA300";}
		else if (raudio == 6){b[i].style.backgroundColor = "#FFBB00";}
		else if (raudio == 7){b[i].style.backgroundColor = "#FFD300";}
		else if (raudio == 8){b[i].style.backgroundColor = "#FFEA00";}
		else if (raudio == 9){b[i].style.backgroundColor = "#F7FF00";}
		else if (raudio == 10){b[i].style.backgroundColor = "#A6FF00";}
		else if (raudio == 11){b[i].style.backgroundColor = "#54FF00";}
		else if (raudio == 12){b[i].style.backgroundColor = "#03FF00";}
		else if (raudio == 13){b[i].style.backgroundColor = "#00FF3F";}
		else if (raudio == 14){b[i].style.backgroundColor = "#00FF81";}
		else if (raudio == 15){b[i].style.backgroundColor = "#00FFC1";}
		else if (raudio == 16){b[i].style.backgroundColor = "#00FBFF";}
		else if (raudio == 17){b[i].style.backgroundColor = "#00BDFF";}
		else if (raudio == 18){b[i].style.backgroundColor = "#0080FF";}
		else if (raudio == 19){b[i].style.backgroundColor = "#0042FF";}
		else if (raudio == 20){b[i].style.backgroundColor = "#0005FF";}
		else if (raudio == 21){b[i].style.backgroundColor = "#3B00FF";}
		else if (raudio == 22){b[i].style.backgroundColor = "#7B00FF";}
		else if (raudio == 23){b[i].style.backgroundColor = "#BB00FF";}
		else if (raudio == 24){b[i].style.backgroundColor = "#FA00FF";}
		else if (raudio == 25){b[i].style.backgroundColor = "#FF0092";}*/ //old stuff
		b[i].style.background = bgColor
		a[raudio].play()
		if(rdir == 0){
			leftRight()
		}
		if(rdir == 1){
			upDown()
		}
		
		if(i == b.length){
			freakbutt = 3078
			assfuck = 0
			i = 0
		}
		
		if (i !== b.length){	//waits the value of var "timeout" before repeating the color() function
			setTimeout(color, timeout);
		}
		
	}
	
	else if(i2 == 1){
		reset()
	}
	//console.log("this is after the function","i",i,"i2",i2,"rdir",rdir,"freakbutt",freakbutt,"assfuck",assfuck,)
}

function reveal(){
	if (i == 0 && buttenable == true){
		rimage = Math.floor(Math.random() * 8)
		rdir = Math.floor(Math.random() * 1)
	}
	
	if (rimage == 0){document.body.style.backgroundImage = 'url("images/ario.jpg")'}
	if (rimage == 1){document.body.style.backgroundImage = 'url("images/nothank.png")'}
	if (rimage == 2){document.body.style.backgroundImage = 'url("images/deletethis.png")'}
	if (rimage == 3){document.body.style.backgroundImage = 'url("images/idc.jpg")'}
	if (rimage == 4){document.body.style.backgroundImage = 'url("images/non.jpg")'}
	if (rimage == 5){document.body.style.backgroundImage = 'url("images/homie.png")'}
	if (rimage == 6){document.body.style.backgroundImage = 'url("images/oshoot.png")'}
	if (rimage == 7){document.body.style.backgroundImage = 'url("images/wide.jpg")'}
	
	if (i2 !== 1 && buttenable == true){
		raudio = Math.floor(Math.random() * 26)
		b[i].style.background = "rgba(255,255,255,0)";
		a[raudio].play()
		
		if(rdir == 0){
			leftRight()
		}
		else if(rdir == 1){
			upDown()
		}
		
		if(i == b.length){
			i2 = 1
			buttenable = false
			console.log("i2", i2)
		}
		
		if (i < b.length){	//waits one second before 
			setTimeout(reveal, timeout);
		}
	}
	
	else if(i2 == 1){
		reset()
		boy()
	}
}

function reset(){
	for(i = 0; i < b.length; i++){
		b[i].style.background = "rgba(255,255,255,1)";
	}
	i = 0
	i2 = 0
}

/* function boxCount(){
	for (i = 0;i < total;){
		b[i].innerHTML = i;
		i++
		console.log(i)
	}
}
 */
/* function whichWay(){
	rdir = Math.floor(Math.random() * 2)
	if(rdir == 0){
		leftRigt()
	}
	if(rdir == 1){
		upDown()
	}
} */

function leftRight(){i++}

/* function upDown(){
	if (i == freakbutt){
		if(freakbutt !== b.length){
			assfuck++
			freakbutt++
			i = assfuck
		}
	}
	else{i += gridx}
} */