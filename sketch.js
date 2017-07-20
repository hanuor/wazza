var p;
var p2;
function setup(){
	createCanvas(640, 360);
	p = new Particle(200, 100, 3);
	p2 = new Particle(400, 200, 1);
}
function draw(){
	background(51);
	var wind = createVector(0.5, 0);
	p.putForce(createVector(0, 0.2 * p.mass));	
	p2.putForce(createVector(0, 0.2 * p2.mass));	
	if(mouseIsPressed){
	p.putForce(wind);

	}
	p.update();
	p.edges();
	p.display();

	
	if(mouseIsPressed){
	p2.putForce(wind);

	}
	p2.update();
	p2.edges();
	p2.display();
	
}
// function Walker(){
// 	// this.post = createVector(width/2, height/2);
// 	// this.vel = createVector(0,0);
// 	// this.acc = p5.Vector.fromAngle(random(TWO_PI));
// 	//  this.update  = function(){	
// 	//  	var mouse = createVector(mouseX, mouseY);
// 	//  	//this.acc = p5.Vector.sub(mouse, this.post);
	 	
// 	//  	// this.acc.normalize();
// 	//  	// this.acc.mult(1);
// 	//  	this.acc.setMag(0.4);
// 	//  	this.vel.add(this.acc);
// 	//  	this.post.add(this.vel);
// 	//  	}
// 	// this.display = function(){
// 	// 	fill(255);
// 	// 	ellipse(this.post.x, this.post.y, 48, 48);
// 	// }
// }
function Particle(x, y, m){
	this.pos = createVector(x, y);
	this.vel = createVector(0,0);
	this.acc = createVector(0,0);
	this.mass = m;
	
	this.update = function(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.set(0, 0);
	}
	this.putForce = function(force){
		var f = force.copy();
		f.div(this.mass);
		this.acc.add(f);
	}
	this.display = function(){
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.mass * 10, this.mass * 10);
	}
	this.edges = function(){
		if(this.pos.y > height){
			this.vel.y *= -1;
			this.pos.y = height;
		}
		if(this.pos.x > width){
			this.vel.x *= -1;
			this.pos.x = width;
		}

	}
}