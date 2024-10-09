// Based on "Wall Drawing 160" by Sol LeWitt

var x;
var s;
var sw;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  x = 0;
  s = 0;
  sw = 5;
}

function draw() {
  background(240, 239, 224);

  // Square
  push();
  if (frameCount % 30 == 0) {
    x += PI / 4;
    print(frameCount);
    if (frameCount % 20 == 0) {
      s = 0.3;
      print("big");
      sw =  1/s;
    } else {
      s = 0.1;
      print("small");
      sw = 1/s;
    }
  }
  translate(width / 2, height / 2);
  noFill();
  stroke(0);
  rotate(x);
  rect(0, 0, 600, 600);
  pop();

  push();
  translate(width / 2, height / 2);
  scale(s);
  stroke(255, 0, 0);
  strokeWeight(sw);
  line(-width, -height, width, height);
  line(width, -height, -width, height);
  pop();
}