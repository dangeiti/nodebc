let a = 0;
let c = 0;

for (b = 1; b < 1000; b += 1){

    c = a + b;
    a = c;

    if (c < 400) {
      console.log(c);
    } else {
      break;
    }
  }