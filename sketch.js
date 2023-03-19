var diamond,boy,sword,path ;
var diamondImg,boyImg,swordImg,pathImg;
var treasureCollection=0;
var diamondGroup,swordGroup;
var picImg;
var PLAY=1;
var END =0;
var gameState =1;
var score=0;
var end1;

function preload(){
picImg = loadImage("Path.jpg");
boyImg = loadImage("chari.png");
swordImg = loadImage("Sword.png");
endImg = loadImage("gameover.png")
diamondImg = loadImage("diamond.jpg");

}

function setup() {
  createCanvas(600,300);
// Moving background
path=createSprite(200,150,500,200);
path.addImage("path",picImg);
//path.x=path.width/2;
path.scale=2.2;
path.velocityX= -2;


//creating boy running
boy = createSprite(150,100,20,20);
boy.addImage("SahilRunning",boyImg);
boy.scale=0.1;

diamond=createSprite(40,350,10,10);
diamond.addImage(diamondImg);
diamond.scale=0.4;


diamondG=new Group();

swordGroup=new Group();

end1=createSprite(400,400);
end1.addImage(endImg);
end1.visibile=false;


}

function draw() {
   if(gameState===PLAY){
      
     
    
      score=score+Math.round(getFrameRate()/60);
     // path.velocityX=-(6+ 3*score/100);

      if(keyDown("space") && boy.x>=159){
        boy.velocityY=-10;
      }

      boy.velocityY =boy.velocityY+ 0.8;

      if(path.x <2){
        path.x =path.width/5;

    
      }
    


    boy.x = World.mouseX;
    //path.velocityX= -4;
    edges= createEdgeSprites();
    boy.collide(edges);
   
   
    
      creatediamond();
      createSword();


        if (diamondG.isTouching(boy)) {
          diamondG.destroyEach();
          treasureCollection=treasureCollection+5;
        }
      
      
        if(swordGroup.isTouching(boy)) {
          gameState=END;
        }
      }
        else if(gameState===END){

        
          path.velocityX=2;
          
         boy.addImage("SahilRunning",endImg);
         boy.x=200;
         boy.y=100;
         boy.scale=0.6;
          
          end1.visibile=true;
          boy.visibile=false;

          diamondG.destroyEach();
          swordGroup.destroyEach();
          
          diamondG.setVelocityXEach(1);
          swordGroup.setVelocityXEach(1);


      }
    
  
    drawSprites();
    textSize(20);
    fill(255);
    text("Treasure: "+ treasureCollection,50,30);
    
  }
  
  
      function creatediamond() {
        if (World.frameCount % 200 == 0) {
      var diamond = createSprite(Math.round(random(50, 350),40, 10, 10));
      diamond.addImage(diamondImg);
      diamond.scale=0.12;
      diamond.velocityY = 3;
      diamond.lifetime = 150;
      diamondG.add(diamond);

     
      }
    }

    function createSword(){
      if (World.frameCount % 530 == 0) {
      var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
      sword.addImage(swordImg);
      sword.scale=0.1;
      sword.velocityY = 3;
      sword.lifetime = 150;
      swordGroup.add(sword);
      }
    }

