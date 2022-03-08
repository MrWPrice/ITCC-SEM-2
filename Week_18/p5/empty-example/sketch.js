let p1;

function setup() {
  createCanvas(500,500);
  p1 = new Particle(random(50,width-50),random(50,height-50));
}

function draw() {
  background(0);

  p1.update();
  p1.display();
  p1.checkEdges();
}

class Particle {
  constructor(startX, startY){
    //this.x = startX;
    //this.y = startY;
    this.pos = createVector(startX, startY),
    this.r = 10;
    //this.xVel = random(0.5,2.5);
		//this.yVel = random(0.5,2.5);
    this.vel = createVector(random(0.5,2.5), random(0.5,2.5));
	}

	update() {
		//this.x = this.x + this.xVel;
		//this.y = this.y + this.yVel;
    this.pos.add(this.vel);
	}

	display() {
		stroke(255);
		strokeWeight(2);
		noFill();
		ellipse(this.pos.x, this.pos.y,this.r*2,this.r*2);
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