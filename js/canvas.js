// Variables!
var radius = 5;
var x = 50;
var y =150;

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");

var ifDraw = true;

// I would add more variables for x, y, radius, and color


//Listeners!!
//An event listener is a procedure in JavaScript that waits for an event to occur.

//Add a listener for loading the window
//Add a listener for the color picker
//Add a listener for the mouse movement (started below)
//Add a listener for the key events (started below)

//function(e)" is the event handling function (on event, object is created). 
//"e" is the object handler (object is made accessible)

window.addEventListener("load", function(e) {
	canvas.width = 0.75*window.innerWidth;
	canvas.height = 0.75*window.innerHeight;
	ctx.fillStyle = 'red';
	//console.log(e)
});

window.addEventListener("resize", function(e){
	canvas.width = 0.75*window.innerWidth;
	canvas.height = 0.75*window.innerHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

})

colorPicker.addEventListener("input", function(e) {
	ctx.fillStyle=colorPicker.value;
	ctx.fill();
});

canvas.addEventListener('mousemove', function(e){
	if (ifDraw) {
		//console.log(e.clientX);
		//console.log(e.clientY);
		var x = e.clientX;
		var y = e.clientY;
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2);
		//ctx.fillStyle = "red";
		ctx.fill();

	}
});

//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	if (e.key == "r"){
		ctx.fillStyle="rgb(255,0,0)";
		ctx.fill();
	}
	else if (e.key == "b"){
		ctx.fillStyle="rgb(0, 0, 255)";
		ctx.fill();
	}
	else if (e.key == "g"){
		ctx.fillStyle = "rgb(0,128,0)";
		ctx.fill();
	}
	else if (e.key == "y"){
		ctx.fillStyle = "rgb(255,255,0)";
		ctx.fill();
	}
	else if (e.key == " "){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
	else if(e.key == "ArrowUp"){
		ifDraw = false;
	}
	else if(e.key == "ArrowDown"){
		ifDraw = true;
	}
	else
		console.log("I don't know that means");
		console.log(e);
	}
	// console.log(this);
	// console.log(e)
);

// Functions!
// I would add a function for draw
// function draw(){
// console.log("I am going to draw!!");
// 	//CHECK OUT beginPath()
// }