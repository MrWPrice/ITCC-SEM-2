translate(width / 2, height / 2);

let noOfPoints = 12;

for (let i = 0; i < noOfPoints; i++) {
  rotate(TWO_PI / noOfPoints);

  strokeWeight(4);
  stroke(255);
  point(0, height/4);
}

function draw(){
    background(0);
    fill(255);
    noStroke(); // so that the text below doesn't have a large stroke value
    text('tap to start', width/2, 20);
  
    let micLevel = mic.getLevel();
    let mappedMicLevel = map(micLevel, 0, 0.1, 0, 200); // map micLevel to desirable range
  
    translate(width / 2, height / 2); // move point of origin to centre of canvas
  
    let noOfPoints = 12; // total number of points to draw
  
    for (let i = 0; i < noOfPoints; i++) { // for all of the points
      rotate(TWO_PI / noOfPoints); // rotate around a circle - default for p5 is radians
  
      strokeWeight(4);
      stroke(255);
      point(mappedMicLevel, height/4);
    }
  
  }