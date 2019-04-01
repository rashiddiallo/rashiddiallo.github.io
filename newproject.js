var canvas;
var userName;
//screen text
var title;
var firstOption;
var secondOption;
var thirdOption;

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
	// background(120);
	beginning();

}

function draw() {
	background(0);
	// rectMode();
	// fill(155, 70, 30);
	// rect(700, 300, 200, 400);
	// ellipseMode();
	// fill(155);
	// ellipse(800, 360, 100, 100);
	// fill(255);
	// ellipse(800, 360, 70, 70);
	// fill(155);
	// ellipse(800, 490, 100, 100);
	// fill(255);
	// ellipse(800, 490, 70, 70);
	// fill(155);
	// ellipse(800, 620, 100, 100);
	// fill(255);
	// ellipse(800, 620, 70, 70);
	// textSize(32);
	// fill(70);
	// text('3', 790, 370);
	// fill(70);
	// text('2', 790, 500);
	// fill(70);
	// text('1', 790, 630);

	
	
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
	background(0);
	greeting.hide();
	nameInput.hide();
	
	userName = createElement('h1', nameInput.value());
	title = createElement('h1', 'Select A Floor');
	//create link want two arguments: where to link and the text

	firstOption = createA("#", "Lobby");

	createElement('br');
	createElement('br');

	secondOption = createA("#", "1st Floor");
	//check to see if the user has clicked on one of the options

	//trigger attached function
	createElement('br');
	createElement('br');

	thirdOption = createA('#', "2nd Floor")

	firstOption.mousePressed(Lobby);

	secondOption.mousePressed(firstFloor);

	thirdOption.mousePressed(secondFloor);

}

//the end of the game
function Lobby(){
	background(0);

	firstOption.hide();

	secondOption.hide();

	thirdOption.hide();

	userName.hide();
	//change the text for the title

	title.html("You have reached the lobby. Have a great day. :)");
	//startOver = createA("index.html", "Start Over")

	//firstOption.mousePressed(startOver);
	playAgain = createA("index.html", "Play Again")

}

function firstFloor(){
	background(0);
	userName.hide();
	thirdOption.hide();
	title.html(nameInput.value() + ', You have reached the 1st Floor. You see something in the distance');
	firstOption.html("Go to 2nd floor");

	secondOption.html("Walk towards it");

	firstOption.mousePressed(secondFloor);

	secondOption.mousePressed(being);

}

function child(){

	thirdOption.hide();

	title.html(nameInput.value() + ', The child has something in her hand. It is a note. The note says there is something on the 3rd floor');

	firstOption.html('Find out what is on the 3rd floor');

	secondOption.html("You're too scared. Run to the elevator and escape to the lobby");

	firstOption.mousePressed(thirdFloor);

	secondOption.mousePressed(Lobby);

}

function being(){
	background(0);
	userName.hide();
	thirdOption.hide();
	title.html(nameInput.value() + ", It's a Wolf and its headed torwards you!! But there is a poison bomb at your feet");
	firstOption.html("Throw poison bomb at Wolf");

	secondOption.html("Try to fight it with your bare hands");

	firstOption.mousePressed(wolfDead);

	secondOption.mousePressed(killed);

}

function wolfDead(){
	background(0);
	userName.hide();
	thirdOption.hide();
	title.html(nameInput.value() + ', The poison bomb managed to kill the wolf');
	firstOption.html("Go to 2nd floor");

	secondOption.html('')

	firstOption.mousePressed(secondFloor);

	secondOption.mousePressed(Lobby);
}

function killed(){
	background(0);
	firstOption.hide();

	secondOption.hide();

	thirdOption.hide();

	userName.hide();
	//change the text for the title

	title.html("The wolf was too powerful and you were killed.");
	//startOver = createA("index.html", "Start Over")

	playAgain = createA("index.html", "Play Again")
}

/////////////////////////////////////

////////animated functions//////////

///////////////////////////////////

function secondFloor(){
	background(0);
	userName.hide();
	thirdOption.hide();
	title.html(nameInput.value() + ', You have reached the 2nd Floor. You see a child, what do you do?');
	firstOption.html("Go to 3rd floor, leaving the child");

	secondOption.html("Walk towards the child");

	firstOption.mousePressed(thirdFloor);

	secondOption.mousePressed(child);
}

function animal(){
	background(0);
	userName.hide();
	thirdOption.hide();
	title.html(nameInput.value() + ", It's a dog. The dog has a note in its mouth. It says he just wants to go home");
	firstOption.html("Take the dog home");

	secondOption.html("go back to the elevator and to the lobby, leaving the dog");

	firstOption.mousePressed(Lobby);

	secondOption.mousePressed(Lobby);

}

function thirdFloor(){
	background(0);
	userName.hide();
	thirdOption.hide();
	title.html(nameInput.value() + ', You have reached the 3rd Floor. You see what looks like an animal');
	firstOption.html("Go back to the elevator and to the lobby");

	secondOption.html("Walk towards the animal");

	firstOption.mousePressed(Lobby);

	secondOption.mousePressed(animal);
}

function windowResized(){

  canvas = createCanvas(windowWidth, windowHeight);

}