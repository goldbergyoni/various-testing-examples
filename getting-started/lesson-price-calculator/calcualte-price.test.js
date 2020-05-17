const ProductsService = require('./products-service')

describe('Calculate Price', () => {

    let productService;
    beforeAll(async () => {
        console.log("Before all - start DB, mock server, config.sendSMS=false");
        productService = new ProductsService();
    })

    beforeEach(() => {
        console.log("before each - config.backToDefault");
    });

    afterEach(() => {
        console.log("After each")
    });

    afterAll(() => {
        console.log("After all - teardown")
    });
    describe('Happy path', () => {
        test('When is on sale, then apply 10% discount', () => {
            
            /// Arrange
            const productService = new ProductsService();

            // Act
            const receivedPrice = productService.calculatePrice(100, true, false);

            // Assert
            if (receivedPrice != 90) {
                throw new Exception("Received price is not as expected");
            }
        });

        test('When we have 2 products within the same category, when quering we get both', () => {
            console.log("Test2")
            /// Arrange
            const productsServiceUnderTest = new ProductsService();
            const product1 = productsServiceUnderTest.addProduct('War & peace', 100, 'books');
            const product2 = productsServiceUnderTest.addProduct('Moby dick', 120, 'books');

            // Act
            const receivedResult = productsServiceUnderTest.getProducts('books');

            // Assert
            expect(receivedResult).toContain(product1);
            expect(receivedResult).toContain(product2);
        });
    });

    describe('Missing inputs', () => {});

});