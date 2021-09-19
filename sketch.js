const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic:true
  }
  angleMode(DEGREES);

  //create player base body
base = Bodies.rectangle(130,400,160,50,options)
World.add(world,base)  

//create player body
player = Bodies.rectangle(130,100,100,150,options)
World.add(world,player)

}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
   image(playerimage,player.position.x,player.position.y,2,1)
push()
  imageMode(CENTER)

  image(baseimage,base.position.x,base.position.y,160,310)
pop()
  //show the playerbase image using image() function


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
