class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY = offsetY
        var options = {
            bodyA : body1,
            pointB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
      
        this.chain = Matter.Constraint.create(options);
    World.add(world,this.chain);
    }
 display(){
     var pointA = this.chain.bodyA.position;
     var pointB = this.chain.bodyB.position;
     
     strokeWeight(3);

     var Anchor1X = pointA.x
     var Anchor1y = pointA.y

     var Anchor2X=pointB.x+this.offsetX
     var Anchor2Y = pointB.y+this.offsetY
    line(Anchor1X,Ancor1Y,Anchor2X,Anchor2Y)
    //line(pointA.x,pointA.y,pointB.x,pointB.y);
 }
}
