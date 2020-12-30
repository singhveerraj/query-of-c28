class Tree {
    constructor(x,y,width,height){
    var options={
        
        'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.height = height;
    this.width = width;
    this.image = loadImage("Plucking mangoes/tree.png");
    World.add(world,this.body)

}
display(){
    var pos = this.body.position;
    imageMode (CENTER);
    image (this.image,pos.x,pos.y,this.width,this.height);
}
}