// let jeep = {
//     brand: 'Jeep Wrangler',
//     price: 34000
// }

// console.log(jeep['brand']);
// console.log(jeep['price']);

const brandy = 'brand';//values should match the properties inside jeep object
const pricey = 'price';

const jeep = {
    brand: 'Jeep Wrangler',
    price: 34000
}

console.log(jeep[brandy]);
console.log(jeep[pricey])

console.log(`The ${jeep[brandy]} is $${jeep[pricey]}`)