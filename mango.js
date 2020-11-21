class Mango {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1,
      }
      this.image = loadImage("");     
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };