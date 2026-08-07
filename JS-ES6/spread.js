const number = [20,50,2000,100,540,];
console.log(number);
console.log(...number)


const max = Math.max(...number)
console.log(max);



const first = [1,2,3,4,5];
const second = [...first]
const third = [0,...first, 97, 45, 12]
// console.log(third)

const ages = [45, 46,1]
const prices = [98, 65, 45]
const all = [...ages,55555, ...prices]
console.log(all);


const person = {name: "Sajid", age: 25}
const employee ={ designation: "dev", ...person}
console.log(employee);


