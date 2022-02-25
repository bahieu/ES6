//Demo Inheritance & Extends 
class Person {
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }

    describe(){
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

class Programmer extends Person {
    constructor(_name,_age,_yearOfExperience){
        super(_name,_age);
        //custom behavior
        this.yearOfExperience = _yearOfExperience;
    }

    code (){
        console.log(`${this.name} is coding`);       
    }
}
const programmers = [
 new Programmer("Jeff", 45),
 new Programmer("Dom",54,12)
];

function developeSoftware (programmers){ 
    for( let programmer of programmers ){
        programmer.code();
    }
}
developeSoftware(programmers);