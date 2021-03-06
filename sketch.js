
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3, dustbin, dimg, ground, paper;

function preload()
{

	dimg.loadImag = ("New folder/dustbin.png");


}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 390, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	box1 = new Box(600, 380, 200, 20);
		 
	box2 = new Box(710, 330, 20, 100);
		 
	box3 = new Box(490, 330, 20, 100);
	
	dustbin = Bodies.rectangle(600, 330, 200, 100)
    dustbin.addImage("dustbin", dimg)

	paper = new Paper(50, 380)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x, ground.position.y, width, 10)
  rect(dustbin.position.x, dustbin.position.y, 200, 100)
  box1.display();
  box2.display();
  box3.display();

  paper.display();
  
  drawSprites();
 




}

function keyPressed() {
	if(keyCode === UP_ARROW)
    Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-85})
}