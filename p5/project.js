var xPos;
var yPos; 
var xSpeed;
var ySpeed;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0);
	xPos = random(windowWidth); // x position will be placed within the width if the window
	yPos = random(windowHeight); // y position will be placesd within the height of the window
	print("x position: " + xPos);

	//set the speed variable 
	xSpeed = 2;
	ySpeed = 2;

	start = true

}

function draw(){
	if(start == true){
		rain();
	}

}

function windowresized(){
	
	resizeCanvas(windowWidth, windowHeight);
	background(200);
	xPos = random(15, windowWidth-15);

function rain(){
	textSize(40);
	textLeading(35);  //sets distance between lined
	text('1\n0\n0\n1', width/2, height/2);
	fill('rgb(0, 255, 0)');

	xPos = xPos + xSpeed;
	yPos = yPos + ySpeed;

	if((xPos >= windowWidth) || (xPos <= 0)){
		xSpeed = xSpeed * -1;

	}
	
	if((yPos >= windowHeight) || (yPos <= 0)){
		ySpeed = ySpeed * -1;

		
}