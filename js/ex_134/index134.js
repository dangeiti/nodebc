let numbers = [];

for (i = 1; i <= 1000; i++) {
    numbers.push(i);
}

let a = 0;
let c = 0;

for (b = numbers[0] ; b <= 1000; b++) {

    c = a + b;
    a = c;

    console.log(c);
}

if(c == 500500) {
    console.log('Good job!!!')
} else {
    console.log('Take a look to see if something is wrong')
}