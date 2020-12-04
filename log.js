class log extends BaseClass
{
  constructor(xpos,ypos, height1,angle)
  {

    super(xpos,ypos,20,height1,angle);

    this.Image = loadImage("sprites/wood2.png")

  //   var options = {
  //       'restitution':0.8,
  //       'friction':1.2,
  //       'density':1.0};
  //  this.body = Bodies.rectangle(xpos,ypos,20,height1, options);
  //  this.width = 20;
  //  this.height = height1;
   Matter.Body.setAngle(this.body,angle);

  //  World.add(world,this.body);


  }
    
}