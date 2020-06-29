class CanonBall{
  constructor(x, y,width,height) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.width = width;
    this.height = height;
    this.image = loadImage("assets/canonBall.png");
  };

  display(){
    push();
    ellipseMode(RADIUS);
  ellipse(200,200,25,25);
  pop();
  push();
  imageMode(CENTER);
  image(this.image, 200, 191, 50, 68);
pop();
};
};
