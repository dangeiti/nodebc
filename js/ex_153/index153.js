let arithmetic = {
    add: function(num1,num2){
        if(typeof num1 == 'number' && typeof num2 == 'number' ){
            console.log(num1 + num2)
        } else {
            console.log('Please type a number!')
        }
    },
    subtract: function(num1,num2){
        if(typeof num1 == 'number' && typeof num2 == 'number' ){
            console.log(num1 - num2)
        } else {
            console.log('Please type a number!')
        }
    },
    multiply: function(num1,num2){
        if(typeof num1 == 'number' && typeof num2 == 'number' ){
            console.log(num1 * num2)
        } else {
            console.log('Please type a number!')
        }
    },
    divide: function(num1,num2){
        if(typeof num1 == 'number' && typeof num2 == 'number' ){
            console.log(num1 / num2)
        } else {
            console.log('Please type a number!')
        }
    },
    remainder: function(num1,num2){
        if(typeof num1 == 'number' && typeof num2 == 'number' ){
            console.log(num1 % num2)
        } else {
            console.log('Please type a number!')
        }
    }
}

arithmetic.add(2, 10)
arithmetic.subtract(10, 5)
arithmetic.multiply(3, 100)
arithmetic.divide(40, 2)
arithmetic.remainder(20, 2)
arithmetic.divide(2, 'five')