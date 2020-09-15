var gameState="PLAY";
var towerImg, tower;
var doorImg, door, doorsGroup;
var ghost, ghostImage;
var climber, climberImage, climbersGroup;
var invisibleBlockGroup, invisibleBlock;

function preload(){
  
  towerImg = loadImage("tower.png");
   doorImg = loadImage("door.png");
  ghostImage=loadImage("ghost-standing.png");
  climberImage=loadImage("climber.png");
}


function setup(){                   
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group(); 
  climbersGroup = new Group(); 
  invisibleBlockGroup = new Group();
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage(ghostImage);
  ghost.scale=0.3;
}

function draw(){
  background(0);
  
  if (gameState==="PLAY"){
    

 
    if(tower.y > 400){
      tower.y = 300
    }
  
  
 
   if(keyDown("left_arrow")){
     ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_arrow")){
   ghost.x = ghost.x + 3;
    }
    
    if(keyDown("space")){
     ghost.velocityY = -10;
    }
  
 ghost.velocityY = ghost.velocityY + 1;
  
  if (climbersGroup.isTouching(ghost)){
   ghost.velocityY=0; 
  }
  
  if (invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState="END";
  }
   //second
    spawnDoors();
 
  
    
  
  
    drawSprites();
  }
  if(gameState==="END"){
    stroke("yellow"); 
    fill("yellow"); 
    textSize(30); 
    text("Game Over", 230,250)
  }
  }
 

  
  
function spawnDoors() {
  //write code here to spawn the doors in the tower
  if (frameCount%240===0){
 door=createSprite(200,-50);
    climber=createSprite(200,10);
     invisibleBlock=createSprite(200,15);
    invisibleBlock.visible=false;
    
    invisibleBlock.width = climber.width; invisibleBlock.height = 2;
    invisibleBlock.velocityY=1;
    
    invisibleBlock.lifetime=600;
    invisibleBlock.debug=false;
    climber.addImage(climberImage);
 door.x = Math.round(random(120,400));
    climber.x=door.x;
    invisibleBlock.x=door.x;
  door.addImage(doorImg);
  door.velocityY=1;
    climber.velocityY=1;
  door.lifetime=600;
     climber.lifetime=600;
  ghost.depth=door.depth;
  ghost.depth=ghost.depth+1;
    
    doorsGroup.add(door);
     climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
 }
  }