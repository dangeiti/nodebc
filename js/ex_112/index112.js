function showNumbers(start,end){
    if (start > end) {
        for (i = start; i >= end; i--){
            console.log(i);
        }
    } else if (start < end) {
        for (i = start; i <= end; i++){
            console.log(i);
        }
    } else if (start == end) {
        console.log('Parameters are the same!');
    } else if (isNaN(start) || isNaN(end)) {
        console.log('Both or one parameter(s) are not numbers!');
    }
}

showNumbers(10,20)