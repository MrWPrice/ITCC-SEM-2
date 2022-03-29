var ship;

function setup() {
  createCanvas(600, 400); 
  ship = new Ship();
    
}

function draw() {
  background(51);
  ship.show();
}