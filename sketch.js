var fixedRect, movingRect;

var go1, go2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  go1 = createSprite(100 , 100 , 50 , 50);
  go1.shapeColor = "blue";

  go2 = createSprite(200 , 100 , 50 , 50 );
  go2.shapeColor = "blue";
 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(isTouching(movingRect , go1)){
    go1.shapeColor = "brown"; 
    movingRect.shapeColor = "brown";
  }
  else{
    go1.shapeColor = "blue";
    movingRect.shapeColor = "green";
  }
      
  drawSprites();
}



//function xyz(arguement)
//boolean values
//ture = yes
//false = no

// if(condition === true){

//