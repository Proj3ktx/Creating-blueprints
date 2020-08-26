const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;
var box2;
var Ground1;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic: true
    }

    ground = Bodies.rectangle(200, 390, 200, 20, ground_options);
    World.add(world, ground);

    box1 = new Box(200, 150, 30, 80);
    box2 = new Box(180, 100, 50, 50);

    Ground1 = new Ground(200, 390, 400, 20);

    console.log(ground);
}

function draw() {
    background(0);
    Engine.update(engine);

    console.log(box2.body.angle);

    box1.display();
    box2.display();

    Ground1.display();

    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);
}