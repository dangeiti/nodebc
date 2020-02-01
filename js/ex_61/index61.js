const weekdayNumber = 5;

// if (weekdayNumber == 1) {
//     console.log('Today it\'s Monday');
// } else if (weekdayNumber == 2) {
//     console.log('Today it\'s Tuesday');
// } else if (weekdayNumber == 3) {
//     console.log('Today it\'s Wednesday');
// } else if (weekdayNumber == 4) {
//     console.log('Today it\'s Thursday');
// } else if (weekdayNumber == 5) {
//     console.log('Today it\'s Friday');
// } else if (weekdayNumber == 6) {
//     console.log('Today it\'s Saturday');
// } else if (weekdayNumber == 7) {
//     console.log('Today it\'s Sunday');
// } else {
//     console.log('Error: Please input a number bettwen 1 and 7');
// }

let message = null;

switch (weekdayNumber) {
  case 1:
    message = 'Today it\'s Monday';
    break;
  case 2:
    message = 'Today it\'s Tuesday';
    break;
  case 3:
    message = 'Today it\'s Wednesday';
    break;
  case 4:
    message = 'Today it\'s Thursday';
    break;
  case 5:
    message = 'Today it\'s Friday';
    break;
  case 6:
    message = 'Today it\'s Saturday';
    break;
  case 7:
    message = 'Today it\'s Sunday';
    break;
  default:
     message = 'Error: Please input a number bettwen 1 and 7';
}

console.log(message);

