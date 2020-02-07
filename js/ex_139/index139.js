let numbers = [];

for (i = 1000; i >= 1; i--) {
    numbers.push(i);
}

let evenNum = numbers.filter(function (even) {
    if(even % 2 == 0){
        return even;
    }
})

let oddNum = numbers.filter(function (odd) {
    if(odd % 2 != 0){
        return odd;
    }
})

//Displaying all even and odd numbers

let showOdd = oddNum.filter(function(odd1){
    return odd1 <= 19;
})

console.log(showOdd)

let evenInArray = [];

let showEven = evenNum.forEach(function (ev,index){
    if(index <= 19){
        evenInArray.push(ev);
    }
})

console.log(evenInArray)