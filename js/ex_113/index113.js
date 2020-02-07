function getShapePerimiter(base,height) {
    if (base == height) {
        let perimeter = base * 4;
        if (perimeter > 100) {
            console.log('The perimeter is too big!')
        } else {
            console.log(`${perimeter} is the square perimeter`);
            console.log('The perimeter is fine')
        }
    } else if (base != height) {
        let perimeter = 2 * (base + height);
        if (perimeter > 100) {
            console.log('The perimeter is too big!')
        } else {
            console.log(`${perimeter} is the rectangle perimeter`);
            console.log('The perimiter is fine')
        }
    }
}

getShapePerimiter(1000,1000)
getShapePerimiter(10,10)
getShapePerimiter(4,6)
getShapePerimiter(2000,1000)