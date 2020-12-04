class bird extends BaseClass
{
  constructor(xpos,ypos)
  {

    super(xpos,ypos,50,50);

    this.Image = loadImage("sprites/bird.png")
      // var options = {

      //   'restitution':0.8,

      //   'friction':0.3,

      //   'density':1.0}

      //   this.body = Bodies.rectangle(xpos,ypos,50,50, options);
        
      //   this.width = 50;

      //   this.height = 50;

      //   World.add(world,this.body);
                  
      }

      display() 
      {
        var position = this.body.position;
        var angle= this.body.angle;

        position.x = mouseX;
        position.y = mouseY;

        super.display();
      }
  }
