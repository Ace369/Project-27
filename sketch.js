
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(350, 400);
	bob2 = new Bob(400, 400);
	bob3 = new Bob(450, 400);
	bob4 = new Bob(500, 400);
	bob5 = new Bob(550, 400);

	roof = new Roof(400, 200, 40);

	rope1 = new Rope(bob1.body, {x: 350, y: 200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof.display();

	rope1.display();

  drawSprites();
 
}



