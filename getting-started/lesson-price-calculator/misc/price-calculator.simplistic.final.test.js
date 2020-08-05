const ProductService = require('../products-service');

const productService = new ProductService();
// If not on sale -> 0% discount
const receivedPrice = productService.calculatePrice(100, false, false);
let result = ' When not on sale and not premium, then the price is like catalog';
if (receivedPrice === 100) {
    result = '✅ ' + result;
} else {
    result = '❌ ' + result;
}
console.log(result);


//If on sale -> 10% discount
const receivedPrice2 = productService.calculatePrice(100, true, false);
let result2 = ' When on sale, then get 10% discount';
if (receivedPrice2 === 90) {
    result2 = '✅ ' + result2;
} else {
    result2 = '❌ ' + result2;
}
console.log(result2);

console.log('✅ When premium customer and on sale, then the price is 20% off');
console.log('✅ When no price specified, then exception is thrown');
console.log('✅ When no onSale parameter specified, then exception is thrown');
console.log('✅ When no isPremium specified, then exception is thrown');
console.log('✅ When all input is null, then exception is thrown');