// let f = 0;
// let f1 = -1;
// let f2 = 1;
// let n = 1;
// let row = 10;

// do {
//     f = f1 + f2;
//     f1 = f2;
//     f2 = f;
//     console.log(f);
//     n++;
// }
// while (n <= row)

let f = 0;
let f1 = -1;
let f2 = 1;
let row = 10;

for (i = 1;i <= row; i++) {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
}