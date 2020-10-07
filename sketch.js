
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

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
	bob1 = new Bob(350, 300);
	bob2 = new Bob(400, 300);
	bob3 = new Bob(450, 300);
	bob4 = new Bob(500, 300);
	bob5 = new Bob(550, 300);

	roof = new Roof(400, 200, 40);

	rope1 = new Rope(bob1.body, {x: 350, y: 200});
	rope2 = new Rope(bob2.body, {x: 400, y: 200});
	rope3 = new Rope(bob3.body, {x: 450, y: 200});
	rope4 = new Rope(bob4.body, {x: 500, y: 200});
	rope5 = new Rope(bob5.body, {x: 550, y: 200});

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
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  drawSprites();
 
}



