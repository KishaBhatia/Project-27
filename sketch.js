var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(400,150,600,75);

	bob1=new Bob(200,400,100);
	bob2=new Bob(300,400,100);
	bob3=new Bob(400,400,100);
	bob4=new Bob(500,400,100);
	bob5=new Bob(600,400,100);
	
	rope1=new Rope(bob1.body,roof.body,-200,0)
	rope2=new Rope(bob2.body,roof.body,-100,0)
	rope3=new Rope(bob3.body,roof.body,0,0)
	rope4=new Rope(bob4.body,roof.body,100,0)
	rope5=new Rope(bob5.body,roof.body,200,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,224);

  textFont("Algerian");
  textSize(80);
  fill("blue"); 
  text("Newton's Cradle",60,600);

  strokeWeight(20);
  line(790,0,790,700);
  line(10,0,0,700);
  line(0,10,800,10);
  line(10,690,790,690);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-60,y:-40});
	}
}
