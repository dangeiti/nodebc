let message = "3.14 it's a great number but 42 it's the answer to life.";
let pi = parseFloat(message.substr(0,4));
let answerToLife = parseInt(message.substr(29,3));
let result = pi + answerToLife;

console.log('result: ',result);
result = result.toString();
console.log(result + ' is the result of adding pi and answerToLife')
console.log(typeof(result));