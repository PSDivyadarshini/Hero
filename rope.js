class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

  

    display(){
        
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(0);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    
}