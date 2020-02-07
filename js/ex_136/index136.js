// Create a new index136.js file
// Define a mutants array and assign the following values
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto
// Beast
// Phoenix
// Logan
// Gambit
// Iterate over each mutants item using forEach
// The objective is to create a string value with Iceman, Logan and Phoenix
// To create the string you need to get the names while iterating the mutants array
// Once the iteration is over show the generated string with the selected mutants names

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

console.log(typeof mutants,mutants)

let sortedMutants = [];

mutants.forEach(function(mutant){
    if(mutant == 'Iceman'){
        console.log(typeof mutant,mutant)
        sortedMutants.push(mutant)
    }
    if(mutant == 'Phoenix'){
        console.log(typeof mutant,mutant)
        sortedMutants.push(mutant)
    }
    if(mutant == 'Logan'){
        console.log(typeof mutant,mutant)
        sortedMutants.push(mutant)
    }
})

console.log(sortedMutants.toString());