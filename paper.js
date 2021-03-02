  
class paper{
    constructor(x,y){
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }  
      
      this.x = x;
      this.y= y;
      this.body=Bodies.circle(this.x,this.y,20,options);
      this.image = loadImage("paper.png");
     
      World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
               
        push();
        translate(pos.x,pos.y);
         imageMode(CENTER);   
         ellipse(pos.x,pos.y,20)   
        fill(255);
        image(this.image, 0, 0, 90,90);
        
        pop();
    }
}