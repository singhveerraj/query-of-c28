
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(175,500,25,50);
	boy.addImage(boyImage);
	boy.scale = 0.08;

	tree = new Tree(600,300,400,500);
	ground = new Ground(400,560,30,800);
	mango1 = new Mango(730,200,40);
	stone = new Stone(125,490,40);
	mango2 = new Mango(500,180,50);
	mango3 = new Mango(550,230,50);
	mango4 = new Mango(620,100,50);
	mango5 = new Mango(660,240,50);
	mango6 = new Mango(640,180,50);
	launcher = new launcherObj(stone.body,{x:130,y:450});

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(255);
  drawSprites();
  boy.display();
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  launcher.display();
  
 
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}