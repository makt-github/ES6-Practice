/*
const array1 = [15, 12, 14, 18, 16, 10];
const array2 = [19, 22, 28, 25, 35, 23];

const jointArray1 = array1.concat(array2);
console.log(jointArray1);

const array3 = [7, 3, 2, 4, 6, 8];

const jointArray2 = array1.concat(array2).concat([10,15]).concat(array3);
console.log(jointArray2);

const jointArray3 = [array1, array2, 5, array3];
console.log(jointArray3);

const jointArray4 = [...array1, ...array2, 5, ...array3];
console.log(jointArray4);

*/

// To find max element within in  a array...

const bankBalance = [450, 650, 200, 150, 800, 420];

const maxItem = Math.max(...bankBalance); // 3 dots being used here..
console.log(maxItem);

