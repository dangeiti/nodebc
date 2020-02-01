let a = 2;
let c = 0;

for (b = 4; b < 1000; b += 2){

    c = a + b;
    a = c;

    if (c <= 132) {
      console.log(c);
    } else {
      break;
    }
  }