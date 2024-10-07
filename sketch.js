var x = 0;


function setup() {
  createCanvas(800, 800); 
  rectMode(CENTER); 
  frameRate(28);
}

function draw() {
  background(240, 239, 224); 
  // mouse position
  // fill(255, 0, 0); 
  // stroke(255, 0, 0);
  text(mouseX, 0, 180); 
  text(mouseY, 0, 200); 

  push();
  x+= 0.02;
  translate (width/2, height/2); 
  noFill(); 
  stroke(2);
  rotate(x);
  rect(0, 0, 600, 600);
  pop();

  stroke(255, 0, 0);
  line(170, 170, 630, 630); 
  line(630, 170, 170, 630);
}
