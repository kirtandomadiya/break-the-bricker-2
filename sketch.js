var form ;
var title ; 
var gameState=0;
var brick1 ;
var brick=[];
var paddle , ball ;
var wall1 ,wall2 , wall2;

function preload(){
paddleimage = loadImage ('IMAGES/paddle.png');
ballimage = loadImage('IMAGES/ball.png');
}
function setup() {
  for (var i=1;i<=100;i=i+1){
    brick [i]= new Brick(i*100,200)
  }
 brick1=new Brick();
 paddle=createSprite(displayWidth/2,displayHeight-200,50,10);
 paddle.addImage('paddle',paddleimage);
 paddle.scale = 0.8;
 ball = createSprite(displayWidth/2,displayHeight-250,20,20);
ball.addImage('ball',ballimage);
ball.scale = 0.5;
wall1 = createSprite(0,displayHeight/2,2,displayHeight);
wall2 = createSprite(displayWidth/2,0,displayWidth,2);
wall3 = createSprite(displayWidth-27,displayHeight/2,2,displayHeight);

ball.velocityX = -9;
    ball.velocityY = -7;
 

  createCanvas(displayWidth-25,displayHeight-25);
form=new Form();
}

function draw() {
  
  background("red");
  paddle.x = mouseX;
  
  if (gameState===0){
    form.display();
  }
  if (gameState===1){
    textSize(20);
    fill("black");
 text("press space to start",displayWidth/2,displayHeight-125);
 if (keyDown('space')){
  gameState=2;
 }
 
  }
  if (gameState===2){
    
    ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);
    brick1.display();
    for (var i=1;i<=100;i=i+1){
      brick [i].display();
    }
   
   
  }

}