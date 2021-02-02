const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1;
var polygon, polygonimg;

function preload() {
    polygonimg = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(windowWidth - 300, windowHeight - 350, 300, 20);
    stand2 = new Ground(windowWidth - 700, windowHeight - 250, 300, 20);
    ground1 = new Ground(windowWidth/2, windowHeight-10, windowWidth, 20);;

    //level one
    block1 = new Block(windowWidth - 230,windowHeight - 360,35,60);  
    block2 = new Block(windowWidth - 250,windowHeight - 360,35,60);
    block3 = new Block(windowWidth - 270,windowHeight - 360,35,60);
    block4 = new Block(windowWidth - 290,windowHeight - 360,35,60);
    block5 = new Block(windowWidth - 310,windowHeight - 360,35,60);
    block6 = new Block(windowWidth - 330,windowHeight - 360,35,60);
    block7 = new Block(windowWidth - 350,windowHeight - 360,35,60);
    block8 = new Block(windowWidth - 370,windowHeight - 360,35,60);
    //level two
    block9 = new Block(windowWidth - 245,windowHeight - 390,35,60);
    block10 = new Block(windowWidth - 265,windowHeight - 390,35,60);
    block11 = new Block(windowWidth - 285,windowHeight - 390,35,60);
    block12 = new Block(windowWidth - 305,windowHeight - 390,35,60);
    block13 = new Block(windowWidth - 325,windowHeight - 390,35,60);
    block14 = new Block(windowWidth - 355,windowHeight - 390,35,60);

   //set two 
   //level one
   block15 = new Block(windowWidth - 660,windowHeight - 260,40,60);
   block16 = new Block(windowWidth - 680,windowHeight - 260,40,60);
   block17 = new Block(windowWidth - 700,windowHeight - 260,40,60);
   block18 = new Block(windowWidth - 720,windowHeight - 260,40,60);
   block19 = new Block(windowWidth - 740,windowHeight - 260,40,60);
   //level two
   block20 = new Block(windowWidth - 680,windowHeight - 290,40,60);
   block21 = new Block(windowWidth - 700,windowHeight - 290,40,60);
   block22 = new Block(windowWidth - 720,windowHeight - 290,40,60);
   //level three
   block23 = new Block(windowWidth - 700,windowHeight - 320,40,60);

    polygon = Bodies.circle(windowWidth - 1100, windowHeight - 200, 20);
    World.add(world,polygon);
  
    slingShot = new SlingShot(this.polygon,{x : windowWidth - 1100,y : windowHeight - 250});


}

function draw() {
    rectMode(CENTER);
    background(56,44,44);
    Engine.update(engine);

    textSize(25);
    fill("yellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",windowWidth - 1100, windowHeight - 575);
    textSize(16);
    text("Press Space to get a second Chance to Play!!", windowWidth - 400, windowHeight - 100);

    stand1.display();
    stand2.display();
    ground1.display();

    strokeWeight(2);
    stroke(15);
    fill("brown");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    fill("blue")
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    fill("green");
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    fill("red");
    block20.display();
    block21.display();
    block22.display();
    fill("brown");
    block23.display();

    imageMode(CENTER)
    image(polygonimg ,polygon.position.x,polygon.position.y,50,50);
  
    slingShot.display();

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    slingShot.fly();
  }

  function keyPressed() {
    if (keyCode === 32) {
        slingShot.attach(this.polygon);
    }
}