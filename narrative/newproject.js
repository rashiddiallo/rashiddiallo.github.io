var canvas;
var userName;
//screen text
var title;
var firstOption;
var secondOption;

//input
var slider;
var greeting;
var nameInput;
var growingPlanetBool = false;
var startOver;

var playAgain;



function preload(){  


}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	background(120);
	beginning();

}

function draw() {
	background(0);
	rectMode();
	fill(155, 70, 30);
	rect(700, 300, 200, 400);
	ellipseMode();
	fill(155);
	ellipse(800, 360, 100, 100);
	fill(255);
	ellipse(800, 360, 70, 70);
	fill(155);
	ellipse(800, 490, 100, 100);
	fill(255);
	ellipse(800, 490, 70, 70);
	fill(155);
	ellipse(800, 620, 100, 100);
	fill(255);
	ellipse(800, 620, 70, 70);
	textSize(32);
	fill(70);
	text('3', 790, 370);
	fill(70);
	text('2', 790, 500);
	fill(70);
	text('1', 790, 630);

	
	
	if(growingPlanetBool == true){
		growingPlanet();

	}

}

/////////////////////////////////////

////////scene start functions///////

///////////////////////////////////
function beginning(){
	background(0);
	greeting = createP("Please type your name and press enter");
	nameInput = createInput();
	//check and see if the user pressed enter
	//then trigger startStory function
	nameInput.changed(startStory);

}

function startStory(){
	//background(0);
	greeting.hide();
	nameInput.hide();
	
	userName = createElement('h1', nameInput.value());
	title = createElement('h1', 'Select A Floor');
	//create link want two arguments: where to link and the text

	firstOption = createA("#", "Lobby");

	createElement('br');

	secondOption = createA("#", "1st Floor");
	//check to see if the user has clicked on one of the options

	//trigger attached function

	firstOption.mousePressed(walkHome);

	secondOption.mousePressed(walkToSun);

}

//the end of the game
function walkHome(){
	background(0);
	firstOption.hide();

	secondOption.hide();

	userName.hide();
	//change the text for the title

	title.html("You have reached the lobby. Have a great day.");
	//startOver = createA("index.html", "Start Over")

	//firstOption.mousePressed(startOver);
	playAgain = createA("index.html", "Play Again")

}

function walkToSun(){
	background(0);
	userName.hide();
	title.html(nameInput.value() + ', 1st Floor. You see a child');
	firstOption.html("Go to 2nd floor");

	secondOption.html("Walk towards the child");

	firstOption.mousePressed(closerToSun);

	secondOption.mousePressed(planetElements);

}

function closerToSun(){

	firstOption.hide();

	secondOption.hide();

	title.html(nameInput.value() + ', The child has something in her hand');

}

function planetElements(){

	firstOption.hide();

	secondOption.hide();

	 slider = createSlider(0, 255, 0);

	title.html(nameInput.value() + " reveal what the child has in her hand");

	growingPlanetBool = true;

	playAgain = createA("index.html", "Play Again")

}

/////////////////////////////////////

////////animated functions//////////

///////////////////////////////////

function growingPlanet(){
	 background(120);

	 //slider requires at least two arguments

	//createSlider(min value, max value, starting value)

  	print(slider.value());

  	fill(slider.value());

  	ellipse(400, 400, slider.value(), slider.value());

}

function windowResized(){

  canvas = createCanvas(windowWidth, windowHeight);

}