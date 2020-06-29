// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

var tank, cball, sball, ball, ground;
var engine, world;
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
tank = new Tanker(100,325,50,50);
ground = new Ground(200,390,400,25);
cball = new CanonBall(200,200,50,50);

Engine.run(engine);
}

function draw() {
Engine.update(engine);
background(255,255,255,150);
// Remember to update the Matter Engine and set the background.
cball.display();
ground.display();
tank.display();

}


function keyReleased() {
    // Call the shoot method for the cannon.
}