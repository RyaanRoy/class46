class Bow{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
            }
        this.image=loadImage("bow0.png");
        this.pointB = pointB
        this.bow = Constraint.create(options);
        World.add(world, this.bow);
     }
        
    attach(body){
            this.bow.bodyA=body;
        }
    fly(){
        this.bow.bodyA = null;
    }

    display(){

        if(this.bow.bodyA){
            var pointA = this.bow.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
              
            }
           
            
            pop();
        }
    }
    
}