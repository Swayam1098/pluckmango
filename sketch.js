const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, tree,treeImage
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mangoImage;
var boy, boyImage;
var stone, stoneImage

function preload(){
treeImage = loadImage("sprites/tree.png")
boyImage = loadImage("sprites/boy.png")
stoneImage = loadImage("sprites/stone.png")
mangoImage = loadImage("sprites/mango.png")
	
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	stone= new Stone(100,460,150)
	stone.scale=0.01
	ground = new Ground(750,695,1500,10)
	mango1=  new Mango(1050,330,35)
	mango2=  new Mango(1150,350,35)
	mango3=  new Mango(1200,260,35)
	mango4=  new Mango(1250,200,35)
	mango5=  new Mango(1100,250,35)
	mango6=  new Mango(1300,250,35)
	mango7=  new Mango(1350,300,35)
	mango8=  new Mango(1250,350,35)
	mango9=  new Mango(1400,350,35)
	
    tree1= new Tree(1200,420,500,600)
	
	
	
    boy = createSprite(200,570,50,20)
	boy.addImage(boyImage)
	boy.scale=0.2

  Engine.run(engine)
}


function draw() {

  background("blue");

  stone.display()
ground.display()
tree1.display()
mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
mango7.display()
mango8.display()
mango9.display()

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)

drawSprites();


 
 
}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouse.X,y:mouse.Y})
}

function mouseRealeased(){
	attach.fly()
}

function detectCollision(lstone,lmango){
var lstonepos = lstone.body.position
var lmangopos = lmango.body.position
var distance = dist(lstonepos.x,lstonepos.y,lmangopos.x,lmangopos.y)
	if(distance<=lmangopos.diametre/2+lstone.diametre/2){
			Matter.Body.setStatic(lmango.body, false)

	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:465});
		attach.launch(stone.body);
	}
}