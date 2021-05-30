
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1,ball,ball2,ball3,ball4,ball5,chain,chain2,chain3,chain4,chain5,chain6


function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.

 ball5 = new Ball(600,450,50)
  ball2 = new Ball(300,450,50)
  ball3 = new Ball(200,450,50)
  ball4 = new Ball(500,450,50)
  roof1 = new Roof(400,40,500,10)
  ball = new Ball(400,450,50)
  chain5 = new Chain(ball5.body,roof1.body,chain5*2,0)
//chain6 = new Chain(ball3.body,{})
  chain4 = new Chain(ball.body,roof1.body,chain4*2,0)
  chain3 = new Chain(ball4.body,roof1.body,chain3*2,0)
  chain = new Chain(ball2.body,roof1.body,chain*3,0); 
  chain2 = new Chain(ball3.body,roof1.body,chain2*2,0)
}
function draw() {
  rectMode(CENTER);
  background("white")

  roof1.display()
  ball.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  chain.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()

  drawSprites();
}


function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball3.body,ball3.body.position,{x:250,y:-210})
	
  }



}
