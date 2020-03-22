
// Inheritance In JavaScript...........

class Father{
    constructor(){
        this.fatherName = " Bush"
    }
}

class Child extends Father{
    constructor(name){
        super();
        this.name = name;
    }
    // no need to use function keyword.... 
    getFullName(){
        return this.name + " " + this.fatherName ;
    }
}

const son1 = new Child("George");

console.log(son1);
console.log("Full Name: "+son1.getFullName());