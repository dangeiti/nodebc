let number = 1;
let number2 = 3;
let result;

while(number2 < 1000) {
    result = number + number2;
    console.log(result);
    number2 += 2;
    number = result;
}