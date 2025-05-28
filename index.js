const Rectangle = class {
    constructor(length, width) {
        this.length = length;
        this.width = width;
        this.a = this.length * this.width;
        this.p = 2 * this.length + 2 * this.width;
    }
    area() {
        return `Area = ${this.a}`;
    }
    perimeter(){
        return `Perimeter = ${this.p}`;
    }
}
const area1 = new Rectangle(10, 5);
    console.log(area1.area(10, 5));
    console.log(area1.perimeter(10, 5));
