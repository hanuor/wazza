var vehicle;

function setup(){
	createCanvas(640, 360);
	vehicle = new Vehicle(320, 180);

}

function draw(){
	background(51);
	vehicle.update();
	vehicle.display();
}

function Vehicle(x, y, m){
	this.pos = createVector(x,y);
	this.vel = createVector(0,0);
	this.acc = createVector(0,0);

this.applyForce = function(force){
	
	this.acc.add(force);
}
this.update = function(){
	this.vel.add(this.acc);
	this.pos.add(this.vel);
	this.acc.set(0,0);
}

this.display = function(){
	fill(255, 150);
	stroke(255);
	ellipse(this.pos.x, this.pos.y, 48, 48);
}

}