function oddAverage(numbers){
    const odds = []
  for (const number of numbers){
    if (number %2 === 1) {
        // console.log(number);
        odds.push(number)
    }
  }
//   odds is the array that contains only the odd numbers
  //console.log(odds);
  let sum = 0;
  for(const number of odds){
    sum = sum +number 
  }
  const count = odds.length;
  console.log(sum, count)
  const avg = sum/count;
  return avg;
  
  
}
const numbers = [42,13,54,21,68,65,78,81,96]
const avg = oddAverage(numbers);
console.log('average of the odd number is:',avg);
