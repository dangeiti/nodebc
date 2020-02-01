let number = 1;
let number2 = 3;
let result;

do {
    result = number + number2;
    console.log(result);
    number2 += 2;
    number = result;
}
while(number2 < 1000)