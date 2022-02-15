let x, y;
let radius = 100;
let r,g,b;
let timer = 10;
let interval = 60;
let score =0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = random(windowWidth);
    y = random(windowHeight);
    r = random(255);
    g = random(255);
    b = random(255);
  
}

function draw() {
    background(220); // set background to grey
    noStroke(); // turn stroke off
    fill(r, g, b); // create a colour fill with out random rgb values
    ellipse(x, y, radius*2, radius*2); // draw a circle
      if (frameCount % interval == 0 && timer > 0) { // if the frameCount is divisible by the interval, then the interval (in seconds) has passed and we can draw a new circle
          timer --; // added countdown
          newCircle();
        }
    
        textSize(24);
        textAlign(LEFT, CENTER);
        text("Score: " + score, 10, 30);
        text("Countdown: " + timer, 120, 30);

}

function mousePressed() {

  let d = dist(mouseX, mouseY, x, y); // find the distance between where the mouse is when pressed and our x and y values
         if (d < radius) { // is the distance smaller than the radius of the circe?
            newCircle(); // create a new circle
            score++;
            console.log("Score!"); // log that we've been successful - we'll update this bit later.
          }
  }

function newCircle() { // reset x, y and rgb values 
  x = random(windowWidth);
  y = random(windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
}