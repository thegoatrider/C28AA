var boyImage,boy,stoneImage,stone;
var ground1;
var slingshot;
var hand;
var tree;     
var mango1,mango2,mango3,mango4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("boyImage.jpg");
	stoneImage = loadImage("stoneImage.jpg");
}

function setup() {
	createCanvas(1000,1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = createSprite(500,500,900,20);

	stone = new Stone(300,260,10,20);
	stone.scale = 10.0;

	boy = createSprite(400,300,50,50);
	boy.addImage(boyImage);
	//boy.scale = 0.5;
	
    slingshot= new Slingshot (stone.body,{x:300,y:260});  
	
	Engine.run(engine);
  
}


function draw() {
 
background(1000);

//ground1.display();
slingshot.display();
stone.display();
drawSprites();
 
}