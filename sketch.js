
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, mTree, boy, stone, sling, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10; 
var boyimg, treeimg

function preload(){
	boyimg= loadImage("boy.png")
	treeimg= loadImage("tree.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	//mTree= createSprite(650,460,350,490)
	//mTree.addImage(treeimg)
	//mTree.scale= 0.4
	//mTree.depth= 0

	stone= new Stone(250,580,50)

	sling= new SlingShot(stone.body,{x:250,y:580})

	mTree= new Tree(650,410,1,1)

	boy = createSprite(300,640,1,1)
	boy.addImage(boyimg)
	boy.scale=0.1


	ground= new Ground(500,690,1000,20)

	m1= new Mango(450,300,30)
	m2= new Mango(600,220,30)
	m3= new Mango(650,280,30)
	m4= new Mango(490,400,30)
	m5= new Mango(550,330,30)
	m6= new Mango(630,380,30)
	m7= new Mango(720,235,30)
	m8= new Mango(750,320,30)
	m9= new Mango(850,320,30)
	m10= new Mango(680,180,30)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  textSize(20)
  text("Press Space to get another chance",50,20)

  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);
  detectCollision(stone,m5);
  detectCollision(stone,m6);
  detectCollision(stone,m7);
  detectCollision(stone,m8);
  detectCollision(stone,m9);
  detectCollision(stone,m10)
  

  ground.display()
  mTree.display()
  stone.display()
  sling.display()
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  m6.display()
  m7.display()
  m8.display()
  m9.display()
  m10.display()

keyPressed()

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function detectCollision(bodya,bodyb) {
	var bodyA=bodya.body.position
	var bodyB=bodyb.body.position

	var distance= dist(bodyA.x,bodyA.y,bodyB.x,bodyB.y)
	if(distance<=bodya.r+bodyb.r){
		Matter.Body.setStatic(bodyb.body,false)
	}
}

function keyPressed() {
	if(keyDown("space")){
		Matter.Body.setPosition(stone.body,{x:250,y:580});
		sling.attach()
	}
}