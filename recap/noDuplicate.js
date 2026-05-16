const names = ['abul','babul','cabul','babul','dabul','cabul','kabul','abul'];
const number = [1,3,5,1,3,22,5,81,66,81];

function nonDuplicate(array){
    const unique = []
for (const item of array){
    if(unique.includes(item) === false ){
       unique.push(item);
    }
    
}
 return unique;
}
const uniqueArray = nonDuplicate(names);
console.log(uniqueArray)

    