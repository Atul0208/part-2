var gameState=0;
var egg;
var score = 0;
var life = 3;
function preload(){
    eggImg=loadImage("egg.png")
    catcherImg=loadImage("basket.png")
    groundImg=loadImage("Spikes.png")
}

function setup() {
	createCanvas( 1365,600);
    eggGroup = new Group();
	ground=createSprite(1380/2-50,595,1499,20)
    ground.addImage(groundImg)
    ground.scale=0.5
    catcher=createSprite(200,550,70,15)
    catcher.addImage(catcherImg)
    catcher.scale=0.3
   
                 
}


function draw() {
background("white")
textSize(35)
fill("red")
text("Score  " + score, width-300, 50)

textSize(35)
fill("black")
text("life:  " + life, 36, 50)



spawnEgg();

 if(catcher.x>0 || catcher.x<1345){
                if(keyDown("Left")){
                    catcher.x=catcher.x-30
                    }
                    if(keyDown("Right")){
                    catcher.x=catcher.x+30
                    }
            }
            
            for(var i = 0 ; i<eggGroup.length; i ++){
                if(eggGroup.get(i).isTouching(catcher)){
                eggGroup.get(i).destroy();
                score=score+Math.round(random(70,120))

                }
                if(eggGroup.get(i).isTouching(ground)){
                    eggGroup.get(i).collide(ground)
                                life=life-1
                                eggGroup.get(i).lifetime=0

                }
   
            }
            if(life<0){
                life=0
                }
               
                       
                      
            
drawSprites();
}

function spawnEgg(){
    if(frameCount%60===0){
        egg=createSprite(0,0,20,20)
        egg.addImage(eggImg)
        egg.scale=0.1
        egg.x=Math.round(random(20,1350))
        egg.velocityY=7
        eggGroup.add(egg)
      
    }
    
}

