class Arrow{
constructor(x,y,width,height){
var options={
'frictionAir':2,
'isStatic':false,


}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("arrow0.png")
this.body.scale=5;
World.add(world,this.body);

}
display(){


imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

}




}



