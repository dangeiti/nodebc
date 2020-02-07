let numbers = [];

for (i = 1; i <= 1000; i++){
    numbers.push(i);
}

let incrementedNumbers = numbers.map(function(number, index){
    let incrementedNum = number + 10;
    let message = `index: ${index}, original number: ${number}, incremented value: ${incrementedNum}`;
    return message;
})

console.log(incrementedNumbers);