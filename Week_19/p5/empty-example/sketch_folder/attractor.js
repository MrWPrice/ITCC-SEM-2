class Attractor {

  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(0.5,2.5), random(0.5,2.5));
    this.mass = 10;
    this.G = 1;
    this.r = 10;
  }

  calculateAttraction(p) {
    // Calculate direction of force
    let force = p5.Vector.sub(this.pos, p.pos);
    // Distance between objects
    let distance = force.mag();
    // Artificial constraint
    distance = constrain(distance, 5, 25);
    // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    force.normalize();
    // Calculate gravitional force magnitude
    let strength = (this.G * this.mass * p.mass) / (distance * distance);
    // Get force vector -> magnitude * direction
    force.mult(strength);
    return force;
  }

  update() {
    this.pos.add(this.vel);
  }

  display() {
    // ellipseMode(CENTER);
    strokeWeight(2);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }

  checkEdges() {

    if (this.pos.x > (width-this.r)) {
      this.vel.x *= -1;
      this.pos.x = width-this.r;
    } else if (this.pos.x < (0+this.r)) {
      this.vel.x *= -1;
      this.pos.x = 0+this.r;
    }

    if (this.pos.y > (height-this.r)) {
      this.vel.y *= -1;
      this.pos.y = height-this.r;
    } else if (this.pos.y < (0+this.r)) {
      this.vel.y *= -1;
      this.pos.y = 0+this.r;
    }

  }
}

/*
# Nature_of_Code_p5js

Study files of - Daniel Shiffman's Nature of Code course on:
https://www.kadenze.com/courses/the-nature-of-code/info


More info:
https://github.com/shiffman/The-Nature-of-Code
http://natureofcode.com/

Gravitational Attraction
*/
