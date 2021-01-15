var PLAY=1;
var END=0;
var gamestate=1;
var score;

var sword;
var swordImage,alienImage,fruitsgroup,Enemygroup;

function preload(){
  
  swordImage= loadImage("sword.png");
  EnemyImage = loadAnimation("alien2.png","alien1.png");
   fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  gameOverImage=loadImage("gameover.png")
 
  
  
 
}


function setup(){
  createCanvas(600,600);
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  
  Enemygroup=createGroup();
  fruitgroup=createGroup(); 
  
  score=0;
  
}

function draw(){
  background("skyblue");
  
  if (gamestate ===  PLAY){
    sword.y=World.mouseY;
    sword.x=World.mouseX;
   
   
    
  }
  
  if(sword.isTouching(fruitgroup)){
     fruitgroup.destroyEach()
    score=score+1
     }
   
   else
     
   if(sword.isTouching(Enemygroup)){
     Enemygroup.destroyEach()
    gameState=END;
     fruitgroup.destroyEach()
     Enemygroup.setVelocityXEach(0)
     fruitgroup.setVelocityXEach(0)
     sword.addImage(gameOverImage)
     sword.scale=2
     sword.x=300
     sword.y=200
     
   }
  
  
  drawSprites();
 text("Score: "+ score, 500,50);  


  fruits();
  Enemy();
}
function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if(r == 1){
      fruit.addImage(fruit1);
    } else if (r == 2){
      fruit.addImage(fruit2);
    } else if (r == 3){
      fruit.addImage(fruit3);
    } else if (r == 4){
      fruit.addImage(fruit4);
    } 
    
    fruit.round=Math.round(random(50,340));
    fruit.velocityX=-7;
    fruit.setLifetime=100;
    
    fruitgroup.add(fruit);
  }
  
}

function Enemy(){
  if (World.frameCount%200===0){
  var  monster = createSprite (400,200,20,20);
    monster.addAnimation("moving",EnemyImage);
    monster.y = Math.round(random(100,300));
    monster.velocityY=-8;
    monster.setLifetime=50;
    
    Enemygroup.add(monster);
    
  }
  
}


  
