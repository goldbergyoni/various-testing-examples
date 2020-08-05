// I want to test that when a product is on sale, the calculatePrice method applies 10% discount

const ProductService = require('./products-service');

describe('Calculate Price', () => {
    describe('Check Discounts', () => {
        test('When a product is on sale, then apply 10% discount', () => {
            const productServiceUnderTest = new ProductService();

            const receivedPrice = productServiceUnderTest.calculatePrice(100, true, false);

            //We should get back 90, let's check
            if (receivedPrice != 90) {
                throw new Error(`We expected to get 90, but got ${receivedPrice}`);
            }
        });
    });
});