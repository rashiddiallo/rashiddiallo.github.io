var streams = [];
var fadeInterval = 1.6;
var symbolSize = 14;

let diameter = 50

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  var x = 0;
  for (var i = 0; i <= width / symbolSize; i++) {
    var stream = new Stream();
    stream.generateSymbols(x, random(-2000, 0));
    streams.push(stream);
    x += 100
  }

  textFont('Arial');
  textSize(symbolSize);
}

function draw() {
  background(3, 150);

  if (keyIsPressed === true){
    background(random(255));
    diameter += 1

  } else{
    background(0);
    diameter = 50
    fill(255, 0, 0);
    ellipse(width/2, height/2, diameter, diameter);
  }
  
  fill(0, 0, 0);
  ellipse(width/2, height/2, diameter, diameter);

  streams.forEach(function(stream) {
    stream.render();
  });

}

function Symbol(x, y, speed, first, opacity) {
  this.x = x;
  this.y = y;
  this.value;

  this.speed = speed;
  this.first = first;
  this.opacity = opacity;

  this.switchInterval = round(random(2, 25));

  this.setToRandomSymbol = function() {
    var charType = round(random(0, 5));
    if (frameCount % this.switchInterval == 0) {
      if (charType > 1) {
        // set it to Katakana
        // this.value = String.fromCharCode(
        //   0x30A0 + round(random(0, 96))
        // );
      } else {
        // set it to numeric
        this.value = round(random(0,9));
      }
    }
  }

  this.rain = function() {
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }

}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(5, 35));
  this.speed = random(2, 7);

  this.generateSymbols = function(x, y) {
    var opacity = 255;
    var first = round(random(0, 4)) == 1;
    for (var i =0; i <= this.totalSymbols; i++) {
      symbol = new Symbol(
        x,
        y,
        this.speed,
        first,
        opacity
      );
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      opacity -= (255 / this.totalSymbols) / fadeInterval;
      y -= symbolSize;
      first = false;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      if (symbol.first) {
        fill(random(0, 255), random(0, 255), random(0, 255), symbol.opacity);
      } else {
        fill(0, 255, 70, symbol.opacity);
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}