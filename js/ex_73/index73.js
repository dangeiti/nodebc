let number = 1;
let asterisk = '*************';
let reduce = 12;

while (number <= 13) {
    console.log(asterisk);
    asterisk = asterisk.slice(0,reduce);
    reduce--;
    number++;
}