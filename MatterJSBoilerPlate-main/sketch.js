
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide



function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 	var ball_options = { 
		isStatic:false, 
		restitution:0.3, 
		friction:0,
		density:1.2,
	}
	ball = Bodies.circle(500,500,30,ball_options);
	World.add(world,ball)
	Engine.run(engine);

	console.log(ball)
	ground = new Ground(width/2,990, width, 20);
	leftSide = new Ground(800, 980, 20, 70)
  rightSide = new Ground(900,980, 20, 70 )
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  leftSide.show()
	rightSide.show();
  ellipse(ball.body.position.x,ball.body.position.y, 30,30)
  drawSprites();
 
}



