class Ground
{
    constructor (x, y, w, h)
    {
   let options = {
       isStatic:false,
       restitution:0.3,
       friction:0.1,
       density:1.2,
   };
     
   this.body = Bodies.circle(x, y, radius, options);
   this.radius = radius

   World.add(world,this.body);
}
diplay(){

    rectMode(CENTER);

    fill("yellow");
circle(this.body.position.x, this.body.position.y, this.radius);
}
}



