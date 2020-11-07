class Box {
    constructor(x,y) {
        this.x=x;
        this.y=y;
        this.BoxWidth=200;
        this.BoxHeight=100;
        this.boxThickness=20;
        this.angle=0;
      this.bottombody = Bodies.rectangle(this.x,this.y,this.BoxWidth,this.boxThickness,{isStatic:true});
      this.leftbody = Bodies.rectangle(this.x-this.BoxWidth/2,this.y-this.BoxHeight/2,this.boxThickness, this.BoxHeight, {isStatic:true}); 
      this.rightbody = Bodies.rectangle(this.x+this.BoxWidth/2,this.y-this.BoxHeight/2,this.boxThickness, this.BoxHeight, {isStatic:true}); 
Matter.Body.setAngle(this.leftbody, this.angle);
Matter.Body.setAngle(this.rightbody, -1*this.angle);
      World.add(world, this.bottombody);
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
    }
    display(){
      var pos =this.bottombody.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.BoxWidth, this.boxThickness);
      pop();
      var posLeft=this.leftbody.position;
      push();
      translate(posLeft.x, posLeft.y);
      rectMode(CENTER);
     rotate(this.angle);
      fill("brown");
      rect(0, 0, this.boxThickness, this.BoxHeight);
      pop();
      var posRight=this.rightbody.position;
      push();
      translate(posRight.x, posRight.y);
      rectMode(CENTER);
     rotate(-1*this.angle);
      fill("brown");
      rect(0, 0, this.boxThickness, this.BoxHeight);
      pop();
    }
  }