
// Demo getter,setter, static
class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numOfRequestForArea = 0;
  }

  get area() {
    return this.width * this.height;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }

  static equals(a, b) {
    return a.width * a.height === b.width * b.height;
  }

  static isValidDimension(width, height) {
    return width === height;
  }
}

let square1 = new Square(8);
let square2 = new Square(8);
console.log(Square.isValidDimension(6,7));
