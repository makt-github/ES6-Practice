const name = "Tayef";
console.log(name);

//name = "Kadir"; cant do that for const data type...

// Examples in array........


const array = ["10","20","30"];
array.push(40);
console.log(array);
array.pop(40);
console.log(array);
array[1] = "15";
console.log(array);

//array = ["tayef", "Kadir", 20];  cant do that..


// Same case as like as Array can applicable in Object.......

/// Lets do something using Let Data Type........

let name1 = "Kadir";
name1 = "Tayef" ;
console.log(name); // let is changeable.............

 //var sum = 0 ;

 let sum =  0;

for(let i = 0; i < 10; i++){
    sum = sum + i ;
}

//console.log(i); cant do because let is lick proof there is no chance to be mixed up with others outside the loop