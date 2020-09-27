
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rightBody;
var leftBody;
var bottomBody;
var ground;
var paperBall;
var dustbinObj;

var engine,world;
function preload()
{

	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	ground = Bodies.rectangle(width/2, 655, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 dustbinObj=new dustbin(1200,650);
	 
	 paperBall = Bodies.circle(600,650,70);
	 World.add(world, paperBall);

	 
	 

	


	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  dustbinObj.display();
  rectMode(CENTER);
    drawSprites();
 
}

function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	 }
	}



