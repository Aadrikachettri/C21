function setup() {
  createCanvas(800,400);
  rect1 = createSprite(100,100,20,20)
  rect2 = createSprite(300,100,20,20)
  rect3 = createSprite(500,100,20,20)
  rect1.shapeColor = "green"
  rect2.shapeColor = "green"
  rect3.shapeColor = "blue"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  rect2.x = World.mouseX
  rect2.y = World.mouseY
  if (isTouching(rect2,rect3))
  {
    rect3.shapeColor = "red"
    rect2.shapeColor = "red"
  }
  else {
    rect3.shapeColor = "blue"
    rect2.shapeColor = "green"  
  }
}
function isTouching (object1 , object2) {
  if(object2.x-object1.x < object2.width/2+object1.width/2 && object1.x-object2.x < object2.width/2+object1.width/2 && object1.y-object2.y < object2.height/2+object1.height/2 && object2.y-object1.y < object2.height/2+object1.height/2  ){
  return true  
  }
  else {
   return false 
  }
}