const tex = 5000;


// default parameter 
 function add(num1, num2 = 0){
 }

//  tamplate string 
 const student ={name: 'sajid', marks: 50};
 const friends = ['bul', 'babul', 'kabul']
//  tamplate 
const dynamicText = `My tex: ${tex} and marks ${student.marks*1.2} has friend:${friends[0]}`;
// console.log(dynamicText);


// arrow function 
const add2 = (num1, num2 = 0) => num1 + num2; 
const tenTimes = x => x* 10;

// spread 
const newFriends = [...friends]
// console.log(newFriends);

// destructuring

const { marks: totalMark} = student
console.log(totalMarks);


