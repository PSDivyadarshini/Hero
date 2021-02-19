
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bgImg;
var bg;
var S;
var R;
var G;
var M;
var b1;   

function preload()
{
	bgImg=loadImage("monster/GamingBackground.png");
}

function setup() {
	createCanvas(1500,800);

  engine=Engine.create();
  world=engine.world;

	S=new Superman(160,200,300,150);
  R=new Rope(S.body,{x:500,y:50});
  G=new Ground(700,600,900,20);
  M=new Monster(1200,300);
  b1=new Box(500,500,50,50);
	

	engine = Engine.create();
	world = engine.world;




	Engine.run(engine);
  
}


function draw() {
  
  background(bgImg);
  Engine.update(engine);
  
  R.display();
  G.display();
  M.display();
  b1.display();
  S.display();  
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(S.body,{x:mouseX,y:mouseY})
}


