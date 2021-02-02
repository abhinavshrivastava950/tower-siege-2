class Block {
  constructor(x,y,width,height){

      var options ={
          'restitution': 0.0005,
          'density': 0.0005,
          'friction': 0.0005
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width=width;
      this.height= height;
      this.Visiblity = 255;
      World.add(world,this.body);
  }

  display(){
    if(this.body.speed<7){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      strokeWeight(1);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visiblity);
      pop();
    }
  }



}
