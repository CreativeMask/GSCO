
var car;
var wall;
var speed;
var weight;

function preload(){

}

function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  car.velocityX = speed;
}

function draw() {
  background("black");
  text("Speed:"+speed+"    Weight:" + weight, 200, 20);
  if(car.collide(wall)){
    d = 0.5*weight*speed*speed/22500;
    car.velocityX = 0;
    
    if(d < 100){
     car.shapeColor = color(0,255,0);
    } else if(d > 100 && d < 180){
      car.shapeColor = color(230,230,0);
    } else if(d > 180){
      car.shapeColor = color(255,0,0);
    }
  }
    
    
  drawSprites();
}
