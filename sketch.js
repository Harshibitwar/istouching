var movingrect,fixrect




function setup() {
  createCanvas(1200,800);
 movingrect=createSprite(400,200,80,30)
 movingrect.shapeColor="green"
 fixrect=createSprite(600,400,50,80)
 fixrect.shapeColor="green"
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if(movingrect.x-fixrect.x<=movingrect.width/2+fixrect.width/2
    && fixrect.x-movingrect.x<=movingrect.width/2+fixrect.width/2
    && movingrect.y-fixrect.y<=movingrect.height/2+fixrect.height/2
    && fixrect.y-movingrect.y<=movingrect.height/2+fixrect.height/2){
    movingrect.shapeColor="red";
    fixrect.shapeColor="red";
  }  
  else{
    movingrect.shapeColor="green";
    fixrect.shapeColor="green"; 
  }
  drawSprites();
}