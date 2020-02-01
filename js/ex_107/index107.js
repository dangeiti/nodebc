function biggerNumber(firstNumber,secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)){
        console.log('parameters are not numbers!')
    } else if (firstNumber > secondNumber) {
        console.log(`Number ${firstNumber} is bigger than ${secondNumber}`);
    } else if (firstNumber < secondNumber){
        console.log(`Number ${firstNumber} is not bigger than ${secondNumber}`);
    } else if (firstNumber == secondNumber){
        console.log('Both numbers are same!');
    }  else {
        console.log('Please type a number')
    }
}


biggerNumber(3,5);
biggerNumber(6,3);
biggerNumber(2,2);
biggerNumber('three','five');

