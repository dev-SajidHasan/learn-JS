// function declaration

function add(num1, num2){
    return num1 + num2;
}
add(5,6)


// function expression 
const addition = function(num1, num2){
    return num1 + num2
}
const result = addition(17, 12);
// console.log(result);



// arrow function 
const add2 = (num1 , num2) => num1 + num2
const total = add2(20, 20);
// console.log(total);

const multiply = (a,b) => a*b;
const sumAll = (a,b,c,d,e,f) => a + b + c + d + e + f;