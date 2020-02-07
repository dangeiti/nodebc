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

let filteredMutants = mutants.filter(function(mutant){
    if (mutant !== 'Magneto' && mutant != 'Iceman' && mutant != 'Gambit'){
        return mutant;
    }
})

console.log(filteredMutants)