
var modem;

var slider;

var button;

var canvas;

function preload(){

	modem = loadSound("ModemSound.mp3", playAudio);
}


function setup(){
	canvas - createCanvas(windowWidth, windowHeight);
	canvas.positon(0, 0);
	canvas.style('z-index', '-1');

	button = createButton('play');
	button.mousePressed(toggleAudio);

	slider = createSlider(0, 3, 1, 0.01);

	modem.setVolume(0.5);

}

function toggleAudio(){
	if(!modem.isPlaying()){
		modem.play();
		button.html("pause");

	}else{
		modem.pause();
		button.html("play");

	}
}

function draw(){
	background(200);

	modem.rate(slider.value());

}