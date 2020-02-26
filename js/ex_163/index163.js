function add() {
    let args = [];
    for (var i = 0; i < arguments.length; i++){
        args.push(arguments[i]);
    }
    return args
}

console.log(add(1,2,3,4,5).reduce(function(ini,cur){
    return ini + cur;
}));
console.log(add(6,7,8,9,10,11,12,13,14,15).reduce(function(ini,cur){
    return ini + cur;
}));

// console.log(add(1,2,3,4,5))
