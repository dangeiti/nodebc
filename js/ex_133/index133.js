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

for (i = 0; i <= mutants.length - 1; i++) {
    console.log(mutants[i])
    if(mutants[i] == 'Magneto'){
        break;
    }
}

let removeMagneto = mutants.indexOf('Magneto');
let magneto = mutants.splice(removeMagneto,1)
console.log(mutants)
console.log(magneto)

for (i = 0; i <= mutants.length - 1; i++) {
    console.log('Item position ' + [i] + ': ' + mutants[i].toUpperCase())
}