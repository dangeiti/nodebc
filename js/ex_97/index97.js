for (i = 1000; i >= 0; i--) {
    if (i.toString().slice(-1) == '0' && i < 1000){
        console.log('**' + i + '**')
    } else {
        console.log(i)
    }
}