let femaleStudents = ['rachel','mika','bea','danica','diana'];
let maleStudents = ['bob','ryan','michael','roger','mike'];

let students = femaleStudents.concat(maleStudents);
students.sort();

console.log(students[0]);
console.log(students[2]);
console.log(students[3]);
console.log(students[5]);
console.log(students[7]);

let i = 0;

while(i <= maleStudents.length - 1){
    let male = maleStudents[i];
    console.log(male);
    i++
}

for(i = 0; i <= students.length - 1; i++){
    console.log(students[i]);
}