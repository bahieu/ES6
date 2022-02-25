// Demo Polymorphism 
class Animal {
    constructor(_name){
        this.name = _name;
    }

    makeSound(){
        console.log('Generic Animal Sound');
    }
}

class Dog extends Animal {
    constructor(_name){
        super(_name);
    }

    makeSound(){
        super.makeSound();
        console.log('Woof! Woof!');
    }
}

const a1 = new Animal('Dom');
const a2 = new Dog('Jeff');

a1.makeSound();
a2.makeSound();