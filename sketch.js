function setup() {
  createCanvas(800, 800); 
  
}

function draw() {
  background(240, 239, 224); 
  // mouse position
    // fill(255, 0, 0); 
    // stroke(255, 0, 0);
    text(mouseX, 0, 180); 
    text(mouseY, 0, 200); 
  
  noFill(); 
  stroke(0)
  square(100, 100, 600);

  stroke(255, 0, 0)
  line(170, 170, 630, 630); 
  line(630, 170, 170, 630);
}
