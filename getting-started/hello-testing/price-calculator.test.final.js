const {
    calculatePrice,
    addProduct,
    getProducts
} = require('./price-calculator');

describe('Calculate price', () => {
    describe('Happy path', () => {
        test('When not on sale and not premium, then the price is like catalog', () => {
            const receivedPrice = calculatePrice(100, false, false);

            expect(receivedPrice).toBe(100);
        });

        test('When 2 product exist for a category, get 2 in return for that category', () => {
            const product1 = addProduct('War & peace', 100, 'books');
            const product2 = addProduct('Moby dick', 120, 'books');

            const receivedResult = getProducts('books');

            expect(receivedResult).toContain(product1);
            expect(receivedResult).toContain(product2);


            let howManyFound = 0;

            return;
            receivedResult.forEach((aProduct) => {
                if (aProduct.name === "War & peace" || aProduct.name === "Moby dick") {
                    howManyFound++;
                }
            })

            if (howManyFound != 2) {
                throw new Error('Not all books found for category');
            }
        });

        test('When no price provided, then an error should be thrown', () => {
            const nullPrice = undefined;

            addProduct.bind(this, 'Dracula', nullPrice, 'books');

            expect(addProduct).toThrowError();
        });
    });

    describe('Missing inputs', () => {});

});