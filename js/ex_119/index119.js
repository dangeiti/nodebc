const data = [42, true, function() {return 'The meaning of life is: '}];
const meaning = data[2];

if (data[1] == true) {
    console.log(meaning() + data[0]);
}