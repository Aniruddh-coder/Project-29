const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Ball, ground;
var platform;
var slingShot;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,600,20);
    platform = new Ground(150, 305, 300, 170);

   Ball = new Bird(200,50,100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(Ball.body,{x:200, y:50});
    
}

function draw(){
    background();
    Engine.update(engine);
    strokeWeight(4);

    ground.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(Ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
