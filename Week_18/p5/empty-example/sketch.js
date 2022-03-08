let p1;
let a1;

function setup() {
  createCanvas(500, 500);
  p1 = new Particle(random(50, width - 50), random(50, height - 50));
  a1 = new Attractor(random(50, width - 50), random(50, height - 50));
}

function draw() {
  background(0);

  p1.update();
  p1.display();
  p1.checkEdges();
  p1.applyForce();

  let force = a1.calculateAttraction(p1);
  p1.applyForce(force);

}



class Particle {


  constructor(startX, startY) {
    //this.x = startX;
    //this.y = startY;
    this.pos = createVector(startX, startY),
      this.r = 10;
    //this.xVel = random(0.5,2.5);
    //this.yVel = random(0.5,2.5);
    this.vel = createVector(random(0.5, 2.5), random(0.5, 2.5));
    this.acc = createVector(0, 0);


  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    //this.x = this.x + this.xVel;
    //this.y = this.y + this.yVel;
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }


  display() {
    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }

  checkEdges() {

    if (this.pos.x > (width - this.r)) {
      this.vel.x *= -1;
      this.pos.x = width - this.r;
    } else if (this.pos.x < (0 + this.r)) {
      this.vel.x *= -1;
      this.pos.x = 0 + this.r;
    }

    if (this.pos.y > (height - this.r)) {
      this.vel.y *= -1;
      this.pos.y = height - this.r;
    } else if (this.pos.y < (0 + this.r)) {
      this.vel.y *= -1;
      this.pos.y = 0 + this.r;
    }


  }
}
class Attractor {

  constructor(x, y) {
    this.pos = createVector(x, y);
    this.mass = 20;
    this.G = 1;
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

  display() {
    ellipseMode(CENTER);
    strokeWeight(2);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, this.mass * 2, this.mass * 2);
  }
}