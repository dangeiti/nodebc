let firstPerson = [
    'Dan',
    'Capa',
    'Puzon',
    30
];

let secondPerson = [
    'Bea',
    'Hipolito',
    'Mayon',
    5
];

let thirdPerson = [
    'Dan',
    'Capa',
    'Puzon',
    30
];

let people1 = firstPerson.reduce(function(initialValue,currentValue){
    return initialValue + currentValue;
})

let people2 = secondPerson.reduce(function(initialValue,currentValue){
    return initialValue + currentValue;
})

let people3 = thirdPerson.reduce(function(initialValue,currentValue){
    return initialValue + currentValue;
})

if(people1 == people2){
    console.log('They are same person!')
} else {
    console.log('They are not the same person!')
}

if(people1 == people3){
    console.log('They are same person!')
} else {
    console.log('They are not the same person!')
}