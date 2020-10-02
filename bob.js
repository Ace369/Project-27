class Bob {
    constructor(x, y) {

        var options = {

            'retitution': 0.3,
            'density': 1.2,
            'friction': 0.5
    
        }

        this.body = Bodies.circle(x, y, 25, options);
        this.radius = 25;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
       // var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
       // rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("blue");
        fill(255);
        ellipse(0, 0, 20);
        pop();



    }



}