function draw() {
  background('#F2F5B6');
  
  if(keyDown("up"))
  {
    player.velocityY=-10
  }

  player.velocityY = player.velocityY + 0.8;
  player.collide(platform)

  spawnPlatform()

  drawSprites();
}

function spawnPlatform(){
  var platforms = createSprite(250,0,50,50);
  platforms.velocityY = 4; 
}
