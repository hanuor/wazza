var vehicle;

function setup(){
	createCanvas(640, 360);
	vehicle = new Vehicle(320, 180);

}

function draw(){
	background(51);

	var target = createVector(mouseX, mouseY);
	vehicle.seek(target);
	vehicle.update();
	vehicle.display();


}

function Vehicle(x, y, m){
	this.pos = createVector(x,y);
	this.vel = createVector(0,0);
	this.acc = createVector(0,0);
	this.maxspeed = 5;
	this.maxforce = 0.2;

this.applyForce = function(force){
	
	this.acc.add(force);
}
this.seek = function(target){
	var desired = p5.Vector.sub(target, this.pos);
	//desired.setMag(this.maxspeed);

	var d = desired.mag();
	if(d < 100){
		var m = map(d, 0, 100, 0, this.maxspeed);
		desired.setMag(m);
	}else{
		desired.setMag(this.maxspeed);
	}

	var steering = p5.Vector.sub(desired, this.vel);
	steering.limit(this.maxforce);
	this.applyForce(steering);
}

this.update = function(){
	this.vel.add(this.acc);
	this.pos.add(this.vel);
	this.vel.limit(this.maxspeed);
	this.acc.set(0,0);
}

this.display = function(){
	fill(255, 150);
	stroke(255);
	ellipse(this.pos.x, this.pos.y, 48, 48);
}

}