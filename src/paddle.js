class Paddle{
    constructor(isLeft=false){
        this.paddle =10
        this.w =20
        this.h =100
        this.x = isLeft ? this.paddle : width-this.w-this.paddle
        this.y = height/2-this.h/2
    };

    draw() {
        rect(this.x,this.y,this.w,this.h);
    };
};
