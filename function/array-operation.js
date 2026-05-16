function sumOfNumber(numbers){
    let sum = 0;
for(const number of numbers){
    console.log(number)
    sum = sum + number;
}
    return sum; 
}
const numbs = [54, 62, 12, 6]
const sum = sumOfNumber(numbs)
console.log('sum of numbers is', sum);
