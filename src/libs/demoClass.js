//Demo class
class Rectangle {
    constructor(_width,_height,_color){
        console.log("The Rectangle is being created");

        this.width =_width;
        this.height =_height;
        this.color = _color;
    }  
    
    getArea(){
        return this.width * this.height;
    }

    printDescription(){
        console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`);
    }
}

let rectangle1 = new Rectangle(10,3,'red'); 
let rectangle2 = new Rectangle(5,20,'yellow'); 

rectangle2.printDescription();