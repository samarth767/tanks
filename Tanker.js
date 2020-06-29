class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.polygon(x, y, width, height, options);
     this.width = width;
     this.height = height;
     World.add(world, this.body);
    };

    display(){
      // Draw the tanker the way you like.
      angleMode(DEGREES); 
      let a = atan2(mouseY - height / 2, mouseX - width / 2);
      translate(100,325);
      push();
      rotate(a);
      rect(0, -10, 120, 20, 5);
      pop();
      arc(0, 0, 80, 80, 165.1, 15.4, CHORD);
      rect(-60, 10, 120, 20);
      rect(-80, 30, 160, 20);
    };
}
