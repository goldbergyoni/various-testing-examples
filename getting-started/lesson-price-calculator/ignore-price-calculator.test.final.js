const ProductsService = require('./products-service')

describe('Calculate Price', () => {

    beforeAll(async () => {
        console.log('Before all - Open DB, initialize mock server, set config.sendSMS=false');
    })

    afterAll(() => {
        console.log('After all - closes all things')
    });

    beforeEach(() => {
        console.log('Before each - reset config, config = {Default Values}')
    });

    afterEach(() => {
        console.log('After each')
    });
    describe('Happy path', () => {
        test('When is on sale, then expect 10% discount', () => {
            /// Arrange
            const productService = new ProductsService();
            console.log('A test')

            // Act
            const receivedPrice = productService.calculatePrice(100, true, false);

            // Assert
            if (receivedPrice !== 90) {
                throw new Error("Should have been 10% discount")
            }
        });

        test('When 2 books exist for the same category, then get both when querying', async () => {
            /// Arrange
            const productsServiceUnderTest = new ProductsService();
            const product1 = productsServiceUnderTest.addProduct('War & peace', 100, 'books');
            const product2 = productsServiceUnderTest.addProduct('Moby dick', 120, 'books');


            // Act
            const receivedResult = await productsServiceUnderTest.getProducts('books');

            // Assert
            expect(receivedResult).toContain(product1);
            expect(receivedResult).toContain(product2);
        });

        test("When deleting an existing product , Then get confirmation", (done) => {
            // Arrange
            const productsServiceUnderTest = new ProductsService();
            productsServiceUnderTest.addProduct('War & peace', 100, 'books');

            // Act
            productsServiceUnderTest.deleteProduct('War & peace', (error, result) => {
                // Assert
                expect(result.succeed).toBe(true);
                done();
            });
        });
    });

    describe('Missing inputs', () => {
        test('When no price provided, then an error should be thrown', () => {
            const nullPrice = undefined;
            const productsServiceUnderTest = new ProductsService();

            const addProduct = productsServiceUnderTest.addProduct.bind(this, 'Dracula', nullPrice, 'books');

            expect(addProduct).toThrowError();
        });
    });

});