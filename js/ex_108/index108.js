function sort(number1,number2,number3,highToLow) {
    if(number1 > number2 && number2 > number3 && highToLow === false){
        console.log(number3,number2,number1, highToLow)
    } else if (number2 > number3 && number3 > number1 && highToLow === false) {
        console.log(number1,number3,number2, highToLow)
    } else if (number3 > number1 && number1 > number2 && highToLow === false) {
        console.log(number2,number1,number3, highToLow)
    } else if (number1 > number2 && number2 > number3 && highToLow === true) {
        console.log(number1,number2,number3, highToLow)
    } else if (number2 > number3 && number3 > number1 && highToLow === true) {
        console.log(number2,number3,number1, highToLow)
    } else if (number3 > number1 && number1 > number2 && highToLow === true) {
        console.log(number3,number1,number2, highToLow)
    }
}

sort(10,8,25,false);