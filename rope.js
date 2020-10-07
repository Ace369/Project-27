class Rope{

    constructor(bodyA, pointB){

        var options = {
            bodyA: bodyA, 
            pointB: pointB,
            stiffness: 0.04,
            length: 40
        }

        this.pointB = pointB;

        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }


    display(){

        if ( this.sling.bodyA) {

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
    
            strokeWeight(1);
    
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }

    }
}