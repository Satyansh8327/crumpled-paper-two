class Paper{
    constructor(x,y){
      var options ={
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body=Bodies.circle(x,y,10,options);
      this.radius=10
      this.image=loadImage("paper.js")
      World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        var angle=this.body.position
      
        image(this.image,pos.x,pos.y,this.radius)
      
    }

}
