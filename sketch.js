var w;
function setup(){
	createCanvas(640, 360);
	w = new Walker();
}
function draw(){
	background(51);
	w.display();
	w.walk();
}
function Walker(){
	this.post = createVector(width/2, height/2);
	// this.x = width/2;
	// this.y = height/2;
	
	 this.walk  = function(){
	 	this.post.x = this.post.x + random(-13,13);
	 	this.post.y = this.post.y + random(-13,13);
	 }
	this.display = function(){
		fill(255);
		ellipse(this.post.x, this.post.y, 48, 48);
	}
}