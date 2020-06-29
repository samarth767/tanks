class Ball {
  constructor(x,y,width,height) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1
    }
    this.body = Bodies.circle(x, y, radius, options);
     this.width = width;
     this.height = height;
     World.add(world, this.body);
     
  }

  display() {
  push();
  strokeWeight(2);
  stroke(0);
  ellipse(200,200,50,50);
  pop();
}
}
