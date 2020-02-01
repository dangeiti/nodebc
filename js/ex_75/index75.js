let f = 0;
let f1 = -1;
let f2 = 1;
let n = 1;
let row = 8;

while (n <= row) {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
    n++;
}