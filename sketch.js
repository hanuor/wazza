var p;
function setup(){
	createCanvas(640, 320);
	p = new Particle();
}
function draw(){
	background(51);
	p.putForce(createVector(0,0.1));
	p.update();
	p.display();
	
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
function Particle(){
	this.pos = createVector(width/2, height/2);
	this.vel = createVector(0,0);
	this.acc = createVector(0,0);
	
	this.update = function(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}
	this.putForce = function(force){
		this.acc = force;
	}
	this.display = function(){
		fill(255);
		ellipse(this.pos.x, this.pos.y, 48, 48);
	}
}