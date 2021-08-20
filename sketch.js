
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png, sea.png");
spriteName.addImage(seaImg);
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 if(seaImg.x < 0){
   seaImg.x = sea.width/2;
 }
}