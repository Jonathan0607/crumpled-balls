const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world, boxb;
var boxr, boxl;

function setup() {

  createCanvas(800,400);
   engine= Engine.create();
   world= engine.world;
  
   ball=new Ball(50, 200, 25);
   boxb= new Boxbase(650,300,200,20);
   boxr= new Boxright(750,265);
   boxl= new Boxleft(550,265);
   ground = new Ground(600,320,10000,20);  
}

function draw() {
  background(0);  
  Engine.update(engine)
boxb.display();
boxr.display();
boxl.display();
ground.display();
ball.display()
}

function keyPressed(){
  if(keyCode=== UP_ARROW){

    Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-100})
  }
}

