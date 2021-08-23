class Ground
{
    constructor (x, y, w, h)
    {
   let options = {
       isStatic:true,
       restitution:0,
       friction:1,
       density:0.1,
   };
     
   this.body = Bodies.rectangle(x,y,w,h,options);
   this.w=w;
   this.y=y;
   World.add(world,this.body);
}
diplay(){

    rectMode(CENTER);

    fill(255);
rect(this.body.position.x, this.body.position.y, this.w, this.h);
}
}



