const ProductsService = require('./products-service')

const productService = new ProductsService();

const receivedPrice = productService.calculatePrice(100, false, false);
let result;
if (receivedPrice === 100) {
    result = '✅';
} else {
    result = '❌';
}
console.log(result, 'When not on sale and not premium, then the price is like catalog');

const receivedPrice2 = productService.calculatePrice(100, true, false);
let result2;
if (receivedPrice === 90) {
    result2 = '✅';
} else {
    result2 = '❌';
}
console.log(result, 'When on sale, then get 10% discount');


const receivedPrice3 = productService.calculatePrice(100, false, true);
let result3;
if (receivedPrice === 90) {
    result3 = '✅';
} else {
    result3 = '❌';
}
console.log(result, 'When premium user, then get 10% discount');
console.log('✅ When premium customer and on sale, then the price is 20% off');
console.log('✅ When no price specified, then exception is thrown');
console.log('✅ When no onSale parameter specified, then exception is thrown');
console.log('✅ When no isPremium specified, then exception is thrown');
console.log('✅ When all input is null, then exception is thrown');