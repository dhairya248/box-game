function setup()
{
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
}

function draw() 
{
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("red");
    box.x=box.x-3;
    
  }

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("yellow");
    box.x=box.x+3;
    
  }

    if (keyIsDown(UP_ARROW)) 
  {
    background("blue");
    box.y=box.y-3;
  
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.y=box.y+3;
    }
  drawSprites();
}

