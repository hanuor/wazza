var w;
function setup(){
	createCanvas(1080, 1920);
	w = new Walker();
}
function draw(){
	background(51);
	w.update();
	w.display();
}
function Walker(){
	this.post = createVector(width/2, height/2);
	this.vel = createVector(0,0);
	this.acc = p5.Vector.fromAngle(random(TWO_PI));
	 this.update  = function(){
	 	var mouse = createVector(mouseX, mouseY);
	 	//this.acc = p5.Vector.sub(mouse, this.post);
	 	
	 	// this.acc.normalize();
	 	// this.acc.mult(1);
	 	this.acc.setMag(0.4);
	 	this.vel.add(this.acc);
	 	this.post.add(this.vel);
	 	}
	this.display = function(){
		fill(255);
		ellipse(this.post.x, this.post.y, 48, 48);
	}
}