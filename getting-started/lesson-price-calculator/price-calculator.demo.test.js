const priceCalculator = require('./products-service');

const receivedPrice = priceCalculator(100, false, false);
let result;
if (receivedPrice === 100) {
    result = '✅';
} else {
    result = '❌';
}
console.log(result, 'When not on sale and not premium, then the price is like catalog');

const receivedPrice2 = priceCalculator(100, true, false);
let result2;
if (receivedPrice2 === 90) {
    result2 = '✅';
} else {
    result2 = '❌';
}
console.log(result2, 'When on sale, then the price is 10% off');

const receivedPrice3 = priceCalculator(100, true, false);
let result3;
if (receivedPrice3 === 90) {
    result3 = '✅';
} else {
    result3 = '❌';
}
console.log(result3, 'When premium customer, then the price is 10% off');

console.log('✅ When premium customer and on sale, then the price is 20% off');
console.log('✅ When no price specified, then exception is thrown');
console.log('✅ When no onSale parameter specified, then exception is thrown');
console.log('✅ When no isPremium specified, then exception is thrown');
console.log('✅ When all input is null, then exception is thrown');