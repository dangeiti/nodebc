let number = 1;
let number2 = 2;
let result;

do {
    result = number + number2;
    console.log(result);
    number2++;
    number = result;
}
while(number2 < 1000)