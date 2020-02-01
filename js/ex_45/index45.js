let playerName = "Patrik Laine is lame";
let teams = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
let message = "Winnipeg is the best Canadian city, Go Winnipeg";

let support = playerName.slice(0, 15);
let supportEdit1 = playerName.slice(0,12).toUpperCase();
let support2 = teams.slice(46, 50);
let supportEdit2 = support2.slice(0,1).toUpperCase() + support2.slice(1);
let support3 = message.slice(12,20);
let support4 = message.slice(34, 38);

let fullMessage = `${supportEdit1} is ${support3} ${supportEdit2} player${support4} ${supportEdit2}!!`;

console.log(fullMessage)
// PATRIK LAINE is the best Jets player, Go Jets!!