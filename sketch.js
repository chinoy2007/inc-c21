
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 let engine;
 let world;
var ball ;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	object1= new Ground(600,600,1200,50);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	Engine.run(engine);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		frictionAir:0,
		density:1.2
	}
	ball=Bodies.circle(300,200,40,ball_options);
	World.add(world,ball);
	
	

}
	


function draw() {
  
  background(0);
  object1.display();
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40);
	
  
  drawSprites();
 
}



