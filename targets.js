class Target{
    constructor(x,y){
    var options={
    
    'isStatic':true,
   
    
    }
    this.body=Bodies.rectangle(x,y,100,100,options);
    this.width=100;
    this.height=100;
    this.image=loadImage("targetimg.jpg");
    this.body.scale=5;
    World.add(world,this.body);
    
    }
    display(){

        if(this.body.speed<5){
    
    
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    
    }
else{
    World.remove(world,this.body);
    
}

}

 }
