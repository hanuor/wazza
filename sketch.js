var w;
function setup(){
	createCanvas(640, 360);
	w = new Walker();
}
function draw(){
	background(51);
	w.update();

	w.display();
}
function Walker(){
	this.post = createVector(width/2, 0);
	this.vel = createVector(0,0);
	this.acc = createVector(0,0.1);
	 

	// this.x = width/2;
	// this.y = height/2;
	
	 this.update  = function(){
	 	this.vel.add(this.acc);
	 	this.post.add(this.vel);
	 	}
	this.display = function(){
		fill(255);
		ellipse(this.post.x, this.post.y, 48, 48);
	}
}