const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boxBase= new Boxbase(360,250,200,20)
	boxRight=new Boxright(360,150)
	boxLeft=new Boxleft(360,350)

	//Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  boxBase.display()
  boxRight.display()
  boxBase.display()
 
 
}