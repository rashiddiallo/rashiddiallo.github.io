var cancvas;


//code in setup runs once
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(255, 120, 180);
  rectMode(CENTER);
}

//runs over and over
//updates every frame 
function draw() {
	strokeWeight(10);
	stroke(255, 0, 0);

	line(20, 60, 700, 500);		//requires 4 arguments, (x1, y1, x2, y2)
	//ellipse expecting 4 arguments (x, y, width, height)
	fill(66, 244, 140);
  	ellipse(400, 300, mouseX, mouseY);			//every line of fnction has to end with a semicolon ";"
   
    noStroke();
    fill(66, 244, 140);
  	rect(width/2, height/2, 100, 200);		//rectangle function

  	triangle(600, 100, 700, 50, 750, 150);		//6 arguments, (x1, y1, x2, y2, x3, y3)	//connects the dot to form triangle

  	//print(mouseX); can use to 
}

function windowResized(){

	canvas = createCanvas(windowWidth, windowHeight);
	background(255, 120, 180);
}