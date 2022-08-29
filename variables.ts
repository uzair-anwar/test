class Point {
    x:string;
    y:number;

    constructor(x:string,y?:number){
        this.x=x;
        this.y=y
    }

    draw(){
        console.log("X: ",this.x+" Y: ",this.y)
    }
}

let point =new Point("5");
point.draw()

let age:number = 20
if(age>15)
age+=10
