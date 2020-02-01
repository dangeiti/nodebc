let number = 1;
let number2 = 2;
let result;

while(number2 < 1000) {
    result = number + number2;
    console.log(result);
    number2++;
    number = result;
}