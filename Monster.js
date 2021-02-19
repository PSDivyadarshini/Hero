class Monster{
    constructor(x,y,width,height){

        var option={
           isStatic:true,
           frictionAir:0.005,
           density:1,
           restitution:2
        }
        this.image=loadImage("monster/Monster-01.png");
        this.body= Bodies.rectangle(x,y,width,height,option);
        this.width=200;
        this.height=200;
        World.add(world,this.body);
    }

    display(){

        var pos= this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height); 
        pop();
    }

}