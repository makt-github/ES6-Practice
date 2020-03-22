// declaring class in JavaScript......

class Student{
    constructor(id, name){

        this.sId = id ;
        this.sName = name ;
        this.dept =  "Department of CSE";
        this.varsity = "Metropolitan University";
    }

}

const student1 = new Student("172-115-030", "MD ABDUL KADIR");
const student2 = new Student("172-115-024","NAYEMUL ISLAM"); 
    
console.log(student1, student2);

console.log(student1.sName, student2.sId);