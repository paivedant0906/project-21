var wall, thickness;
var bullet,speed,weight;


function setup(){
  createCanvas(1600,400); 
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  bullet=createSprite(200,240,26,6);
  speed=random(223,321);
  bullet.velocityX=speed;
  weight=random(30,52);
  
 
  
}

function draw(){
  background("black");
  
  if(iscollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5 *weight *speed *speed/(thickness *thickness *thickness);
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }

  }
  drawSprites();
}

function iscollided(object1,object2){
  var bulletRightEdge=object1.x + object1.width;
  var wallLeftEdge=object2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
  }
  