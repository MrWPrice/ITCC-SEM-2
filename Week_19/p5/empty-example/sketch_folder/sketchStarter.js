
let particles = [];
let attractors = [];
let numParticles = 5;
let bgColour = 0;
let particleColour = 255;


function setup() {
	createCanvas(windowWidth, windowHeight); // create a canvas that fills the window
	
	for (let i = 0; i < numParticles; i++) {
    	particles[i] = new Particle(random(50,width-50),random(50,height-50),random(4,8));

    	
  	}

  	for (let i = 0; i < 1; i++) {
    	attractors[i] = new Attractor(random(0,width),random(0,height));
  	}
}

function draw() {
	background(bgColour);

	for (let j = 0; j < attractors.length; j++) {
			attractors[j].update();
			attractors[j].display();
			
	
		for (let i = 0; i < particles.length; i++) {
			let force = attractors[j].calculateAttraction(particles[i]);
			particles[i].applyForce(force);
			particles[i].update();
			particles[i].display();
			
		}
	}

}

function mousePressed() {
	
}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  
}

class Particle {
	
	constructor(startX, startY, startMass){
		this.mass = startMass;
		this.r = 10;
		this.pos = createVector(startX, startY);
		this.vel = createVector(random(0.5,2.5), random(0.5,2.5));
		this.acc = createVector(0, 0);
	
	}

	applyForce(force) {
		let f = p5.Vector.div(force, this.mass);
		this.acc.add(force);
	} 

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.set(0, 0);
	}

	display() {
		stroke(particleColour);
		strokeWeight(2);
		noFill();
		ellipse(this.pos.x, this.pos.y,this.mass*2,this.mass*2);
	}

}