var car,wall1;

var speed,weight;






function setup() {
  createCanvas(800,400);
 car =  createSprite(790, 50, 20, 5); 
car.shapeColor = "red";
car.velocityX = -5,speed;


 wall1 = createSprite(300,100,1000,10);
wall1.shapeColor = "white";

speed = random(55,50);
 weight = random(400,1500);

 car =  createSprite(790, 150, 20, 5); 
car.shapeColor = "green ";
car.velocityX = -speed;

wall1 = createSprite(300,200,1000,10);
wall1.shapeColor = "white";


car =  createSprite(790, 250, 20, 5); 
car.shapeColor = "green ";
car.velocityX = -speed;


wall1 = createSprite(300,300,1000,10);
wall1.shapeColor = "white";

}
 


function draw() {
  background(0,0,0);  

if(wall1.x-car.x<(car.width+wall1.width)/2){
car.velocityX = 0;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation<180){
car.shapeColor = color(255,0,0)
}
if(deformation<180 && deformation>100){
  car.shapeColor = color(230,230,230)
}
if(deformation<100){
  car.shapeColor = color(0,255,0)
}

}






  drawSprites();
}