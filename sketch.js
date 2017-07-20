var p;
function setup(){
	createCanvas(640, 320);
	p = new Particle();
}
function draw(){
	background(51);
	var wind = createVector(0.5, 0);
	p.putForce(createVector(0, 0.2));
	p.putForce(wind);
	p.update();
	p.edges();
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
		this.acc.set(0, 0);
	}
	this.putForce = function(force){
		this.acc.add(force);
	}
	this.display = function(){
		fill(255);
		ellipse(this.pos.x, this.pos.y, 48, 48);
	}
	this.edges = function(){
		if(this.pos.y > height){
			this.vel.y *= -1;
			this.pos.y = height;
		}
	}
}