class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log("X: ", this.x + " Y: ", this.y);
    }
}
let point = new Point("5");
point.draw();
let age = 20;
if (age > 15)
    age += 10;
//# sourceMappingURL=variables.js.map