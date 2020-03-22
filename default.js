
function add(num1, num2 = 0){
    /*if(num2 == undefined){
        num2 = 0 ; 
    } */
    // or

   // num2 = num2 || 0 ;

    return num1 + num2 ;
}

//const total = add(10, 15);

// If....

const total = add(10); // if one parameter is not defined..........
console.log(total);

// 3 Steps above has been discussed as BackUp of any function to be execute...

/*
if(num2 == undefined){
        num2 = 0 ; 
    }

num2 = num2 || 0 ;

add(num1, num2 = 0)
*/