
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1 
var  ground1

function preload()
{
	dustbinImage=loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1= new Paper(100,100);
	ground1=new Ground(800,600);
	dustbin1=new Dustbin (1500,500,50,200);
	dustbin2=new Dustbin(1300,500,50,200);
	dustbin3=new Dustbin (1400,600,200,50);
	

	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine)

  image (dustbinImage,1325,400,150,190)


  
  ball1.display();
  ground1.display();
  dustbin1.display();  
  dustbin2.display();
  dustbin3.display();
 
  

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:25,y:-25})
	}
}
