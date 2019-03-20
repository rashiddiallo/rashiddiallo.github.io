//global  variable
var cancvas;

var mouseSpeedStroke;

var ellipseWH = 200;

var furby;

function preload(){
	furby = loadImage("images/furby.png");
}
//code in setup runs once
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
	  rectMode(CENTER);
	  imageMode(CENTER);
  
  //var i is local to the for loop/ vaer i only exists in for loop
  for(var i = 0; i < 20; i++){			// runs over and over; requires 3 arguments
    print(i); 							
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(random(0, width), random(0, height), 20, 20);
  }
}

//runs over and over
//updates every frame 
function draw() {
	textSize(100);
	fill(0);
	text('first drawing app', 40, 300);

	image(furby, mouseX, mouseY, mouseX, mouseY);
	image(furby, 400, 300);
	//background(255, 255, 0);
	stroke(0);
	strokeWeight(5);
	for(var i = 0; i<windowHeight; i++){ //as long as i is less than the height if thet entire window
		line(0, i*40, windowWidth, i*40);
	}
	for(var i = 0; i<windowWidth; i++){ //as long as i is less than the height if thet entire window
		line(i*40, windowWidth, i*40 );
	}
	//line and outline styles
	if(mouseX > windowWidth/2){
		strokeWeight(10);
		
		stroke(255, 0, 0);
		ellipseWH = 400;
		fill(120, 44, 110, 50);
	}else{
		strokeWeight(20);

		stroke(255, 0, 255);
		elipseWH = 200
		fill(66, 244, 140, 50);
	}

	line(20, 60, 700, 500);		//requires 4 arguments, (x1, y1, x2, y2)
	mouseSpeedStroke = dist(mouseX, mouseY, pmouseX, pmouseY);
	strokeWeight(mouseSpeedStroke);
	line(mouseX, mouseY, pmouseX, pmouseY);

	//ellipse expecting 4 arguments (x, y, width, height)
	fill(66, 244, 140);
  	ellipse(200, 400, ellipseWH, ellipseWH);			//every line of fnction has to end with a semicolon ";"
   
    noStroke();
    fill(66, 244, 140);
    // "nofill()" deletes fill 
  	rect(width/2, height/2, 100, 200);		//rectangle function

  	triangle(600, 100, 700, 50, 750, 150);		//6 arguments, (x1, y1, x2, y2, x3, y3)	//connects the dot to form triangle

  	//print(mouseX);
}

function windowResized(){

	canvas = createCanvas(windowWidth, windowHeight);
	
}

function keyTyped(){
	if(key === 's'){
		save('sketch.jpg');
	}
}