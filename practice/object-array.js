 const num = [1, 2, 54, 43, 4];
const players = [{}, {}, {}];
const employees = [
    { name: 'Ashik', designation: 'garmants job', salary: 20000 },
    { name: 'Habiz', designation: 'busness', salary: 200000 },
    { name: 'Alamin', designation: 'offesir', salary: 50000 },
    { name: 'Sajid', designation: 'garmants BOSS', salary: 300000 }
];
// console.log(employees[1]);
// console.log(employees[2].salary);

// for(const emp of employees){
//     console.log(emp.salary);
    
// }



for (const emp of employees){
    const person = emp;
    const personInfo = person.name +':'+ person.salary;
    console.log(personInfo);
    
}


