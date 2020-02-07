let tripExpenses = [
    10,
    20,
    30
]

let budget = tripExpenses.reduce(function(initialValue, currentValue){
    return initialValue + currentValue;
})

console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]} meals: ${tripExpenses[2]}`)
console.log(`Total trip budget: ${budget}`)