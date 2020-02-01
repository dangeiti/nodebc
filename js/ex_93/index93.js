// let number = 1;
// let asterisk = '*************';
// let reduce = 12;

// do {
//     console.log(asterisk);
//     asterisk = asterisk.slice(0,reduce);
//     reduce--;
//     number++;
// }
// while (number <= 13)

let asterisk = '*************';
let reduce = 12;

for (i = 1; i <= 13; i++) {
    console.log(asterisk);
    asterisk = asterisk.slice(0,reduce);
    reduce--;
}