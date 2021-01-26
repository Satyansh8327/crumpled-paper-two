class Ground{
    constructor(x,y){
    var options={
        'isStatic':true,
        'restitution':0.3,
        'friction':0.8,
        'density':0.5
    }
    this.ground=Bodies.rectangle(x,y,1800,50,options)
 this.width=1800
 this.height=50

    World.add(world,this.ground)
    }

    display(){
    var position=this.ground.position    

    rectMode(CENTER)
    rect(position.x,position.y,this.width,this.height)
    
    }
}