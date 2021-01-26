class Dustbin{
    constructor(x,y,width,height){
        var options={
            'isStatic':true,
            'restitution' :0.3,
            'friction':0.8,
            'density':0.3
        }
        this.dustbin=Bodies.rectangle(x,y,width,height,options)
           this.width=width
           this.height=height
        World.add(world,this.dustbin)
    }
    display(){
        var position=this.dustbin.position
        push();
        translate(position.x,position.y)
        rotate(this.dustbin.angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
}