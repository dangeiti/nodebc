function showNumbers(start,end){
    if (start > end && typeof(start) == "number" && typeof(end) == "number") {
            for (i = start; i >= end; i--){
                console.log(i);
        }
    } else if (start < end && typeof(start) == "number" && typeof(end) == "number") {
            for (i = start; i <= end; i++){
                console.log(i);
        }
    } else if (start == end && typeof(start) == "number" && typeof(end) == "number") {
        console.log('Parameters are the same!');
    } else if (typeof(start) != "number" || typeof(end) != "number") {
        console.log('Both or one parameter(s) are not numbers!');
    }
}
showNumbers(0,1000)
showNumbers(1000,0)
showNumbers(100,100)
showNumbers("100",300)

