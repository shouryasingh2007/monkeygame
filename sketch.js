
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
  
  var SurvivalTime=0;
 
 
}



function setup() {
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  //creating ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x = ground.width/2;
}


function draw() {
 background(255);
  
 stroke=("white");
 textSize(20);
 fill("white");
 text("score:"+ score,500,50);
  
 stroke=("black");
 textSize(20);
 fill("black");
 SurvivalTime=Math.ceil(frameCount/frameRate())
 text("Survival Time:"+ SurvivalTime,100,50);
  
 if(ground.x<0){
   ground.x=ground.width/2;
 }
  if(keyDown("space")&&monkey.y>=100){
    monkey.velocityY=-12;
  }
   monkey.velocityY=monkey.velocityY+0.8;
   monkey.collide(ground);
  

 drawSprites(); 
  //creating banana
  if (frameCount % 80 === 0){
  banana=createSprite(350,150,20,20);
  banana.y=Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4;
  banana.lifetime=80;
  bananaGroup.add(banana);
  }
  
  //creating obstacles
   if (frameCount % 300 === 0){
   obstacles=createSprite(350,325,20,20);
   obstacles.addImage(obstacleImage);
   obstacles.scale=0.1;
   obstacles.velocityX=-4;
   obstacles.lifetime=300;
   obstaclesGroup.add(obstacles);
   }
  
  
    
}
 




