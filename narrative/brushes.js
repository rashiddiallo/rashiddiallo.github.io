
var furby
//brush booleans
var ellipseBrush = false;
var furbyBrush = false;

var mappedFill

function preload(){
	furby = loadImage("images/furby.png");
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	background(0);

}

function draw(){
	if(furbyBrush == true){
		furb();
	}
	if(ellipseBrush == true){
		ellip();
	}

}

function keyTyped(){
	if(key === 'q'){
		furbyBrush = true;
		ellipseBrush = false;
	}
	if(key === 'w'){
		furbyBrush = false;
		ellipseBrush = true;
	}
}

function furb(){
	image(furby, mouseX, mouseY, 50, 50);

}

function ellip(){

	mappedFill = map(mouseX, 0, windowWidth, 0, 255);
	fill(mappedFill);
	ellipse(mouseX, mouseY, 50, 50);

}