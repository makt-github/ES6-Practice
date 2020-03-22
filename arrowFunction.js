// Function declaration with different views.........

// Regular  
function doubleIt(num){
    return num * 2 ;
}

const result = doubleIt(5);
console.log(result);

// As variable (Function Name Can be defined too)
const tripleIt = function(num1){
    return num1 * 3; 
}

const result1 = tripleIt(5);
console.log(result1);

// ES-6 Rules...

// One More Parameter
const add = (x,y) => x + y ;

const result2 = add(5,25);
console.log(result2);

// Single Parameter
const square = a => a * a ;

const result3 = square(5);
console.log(result3);

// Null parameter........
const return10 = () => 10 ;

const result4 = return10();
console.log(result4);

// Multiple Lines in a arrow Function.....

const doMath = (m,n) => {
    const add = m + n ;
    const diff = m - n ;
    const result = add * diff ;
    return result ;
}

const result5 = doMath(10, 5);
console.log(result5);
