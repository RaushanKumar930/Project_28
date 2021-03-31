class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 50,
            stiffness: 0.1
        }
        this.pointB=pointB
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    fly(){
        this.chain.bodyA=null
    }
    attach(){
        this.chain.bodyA=stone.body
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position
            var pointB = this.pointB
            strokeWeight(5)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}