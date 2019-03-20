//ball x, y position
var xPos;
var yPos;

//ball speed
var xSpeed;
var ySpeed;

// score
var score = 0;
//stores how close our mosue is to the ball
var mouseDist;

//booleans: can eitehr true or false 
var start = false;
var end = false;

//runs once
function setup(){
	createCanvas(windowWidth, windowHeight);
	background(200);

	//generate random ball call positons 
	xPos = random(windowWidth); // x position will be placed within the width if the window
	yPos = random(windowHeight); // y position will be placesd within the height of the window
	print("x position: " + xPos);

	//set the speed variable 
	xSpeed = 2;
	ySpeed = 2;

	start = true
}



//runs in loop
function draw(){
	if(start == true){
		game();
	}
	if(end == true){
		win();
	}
}


function windowresized(){
	
	resizeCanvas(windowWidth, windowHeight);
	background(200);
	xPos = random(15, windowWidth-15);
}

//custom functions
function game(){
	background(0); // background shade
	textSize(40);
	text('Score: ' + score +'00', 10, 50); //adds text
	//take current x position, update it with the speed variable
	xPos = xPos + xSpeed;
	yPos = yPos + ySpeed;
	//print(xPos);
	//use variable for ball positon 
	ellipse(xPos, yPos, 30, 30);

	//check to see if the ball position has reached
	//edges of screen, if so reverse
	if((xPos >= windowWidth) || (xPos <= 0)){
		xSpeed = xSpeed * -1;

	}
	
	if((yPos >= windowHeight) || (yPos <= 0)){
		ySpeed = ySpeed * -1;
		fill(random(255), random(255), random(255));

	}

	//calcualting distance between mosue and ball
	mouseDist = dist(mouseX, mouseY, xPos, yPos);
	print(mouseDist);

	if(mouseDist <= 15){
		score++;
		xPos = random(15, windowWidth-15);
		yPos = random(15, windowHeight-15);
		ySpeed = ySpeed * 1.2;
		xSpeed = xSpeed * 1.2;
		print(score);

	}
	if(score == 10){
		start = false;
		end= true;
	}
}

function win(){
	background(100); // background shade
	textSize(40);
	text('You Win!', 10, 50); //adds text

}