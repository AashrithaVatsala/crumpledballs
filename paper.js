class Paper {
    constructor (x, y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,  
        }
    this.body = Bodies.circle(x, y, 70, options)
    this.radius = 70
    this.image = loadImage("New folder/paper.png")
    World.add(world, this.body)
      }
      display(){
          push()
          translate(this.body.position.x, this.body.position.y)
          rotate(this.body.angle)
          fill("purple")
          ellipseMode(RADIUS)
          ellipse(0, 0, this.radius)
          pop()
      }


}