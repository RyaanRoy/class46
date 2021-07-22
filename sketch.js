
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bow1, arrow, background,backgroundimg;
var engine, world;
var arrow1;
var target1;
function preload(){


backgroundimg=loadImage("background0.png");

}

function setup(){
createCanvas(1000,1000);
engine=Engine.create();
world=engine.world;
arrow1=new Arrow(200,390,100,100);
target1=new Target(500,500);
bow1=new Bow(arrow1.body,{x:500,y:900})
}

function draw(){
background(backgroundimg);
Engine.update(engine);
arrow1.display();
target1.display();
bow1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(arrow1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  bow1.fly();
}
function keyPressed(){
  if(keyCode===32){
  Matter.Body.setPosition(arrow1.body, {x: mouseX , y: mouseY});
  }     
}