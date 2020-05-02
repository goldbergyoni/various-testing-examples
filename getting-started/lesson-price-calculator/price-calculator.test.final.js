    const productsService = require('./products-service')

    describe('Calculate price', () => {
        describe('Happy path', () => {
            test('When not on sale and not premium, then the price is like catalog', () => {
                const productsServiceUnderTest = new ProductsService();

                const receivedPrice = productsServiceUnderTest.calculatePrice(100, false, false);

                expect(receivedPrice).toBe(100);
            });

            test('When 2 product exist for a category, get 2 in return for that category', () => {
                // Arrange
                const product1 = addProduct('War & peace', 100, 'books');
                const product2 = addProduct('Moby dick', 120, 'books');
                const productsServiceUnderTest = new ProductsService();

                // Act
                const receivedResult = productsServiceUnderTest.getProducts('books');

                // Assert
                let howManyFound = 0;
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
                const productsServiceUnderTest = new ProductsService();

                productsServiceUnderTest.addProduct.bind(this, 'Dracula', nullPrice, 'books');

                expect(addProduct).toThrowError();
            });
        });

        describe('Missing inputs', () => {});

    });