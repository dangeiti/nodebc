let mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'
];

console.log(mutants);

let updatedMutants = [];

mutants.map(function (mutant){
    if(mutant == 'Professor X'){
        updatedMutants.push('<3 ' + mutant)
    }
    if(mutant == 'Logan'){
        updatedMutants.push('<3 ' + mutant)
    }
    if(mutant == 'Phoenix'){
        updatedMutants.push('<3 ' + mutant)
    }
    if(mutant == 'Gambit'){
        updatedMutants.push('<3 ' + mutant)
    }
})

console.log(updatedMutants)