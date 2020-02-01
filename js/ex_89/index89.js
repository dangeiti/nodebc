// let number = 1;
// let number2 = 2;
// let result;

// do {
//     result = number + number2;
//     console.log(result);
//     number2++;
//     number = result;
// }
// while(number2 < 1000)

let number = 1;
let result;

for (number2 = 2; number2 < 1000; number2++) {
    result = number + number2;
    console.log(result);
    number = result;
}