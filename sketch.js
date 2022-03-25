var canvas, backgroundImage;
var sticks, rocks;
var platform;
var farmer;

var gameState = "play";

var obstaclesGroup, obstacle1,obstacle2;

function preload() {
  backgroundImage = loadImage ("sprites/cartoon-factory.png");
  farmerImage = loadImage("sprites/farmer.png");
  platformImage = loadImage("sprites/wood.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  farmer = createSprite(200,200,50,50);
  farmer.addImage("ghost",farmerImage);
  farmer.scale = 0.3;
  
  
}

function draw() {
  background(backgroundImage); 
  
   
  if(gameState === "play"){
    if(keyDown("space")) {
      farmer.velocityY = -10;
    }
    if(keyDown("left_arrow")) {
      farmer.x = farmer.x-3;
    }
    if(keyDown("right_arrow")) {
      farmer.x = farmer.x+3;
    }
    farmer.velocityY = farmer.velocityY + 0.8;
    
    if(backgroundImage.y>400){
      backgroundImage.y = 300
    }
    
  }
  
  if(gameState === "end"){
    textSize(30);
    text("Game Over",230,250);
    
  }
  drawSprites();
}