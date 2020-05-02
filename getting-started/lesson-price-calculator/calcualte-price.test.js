const ProductsService = require('./products-service')

describe('Calculate price', () => {
    beforeAll(async (done) => {
        console.log('Before all');
        setTimeout(() => {
            done();
        }, 100);
    })

    let productsService;

    beforeAll(() => {
        console.log('2 Before all');
        productsService = new ProductsService();
    });

    beforeEach(() => {
        console.log('3 Before each');
    });

    afterEach(() => {
        console.log('6 After each');
    });

    afterAll(() => {
        console.log('10 After all');
    });
    describe('Happy path', () => {
        test('When product is on sale, then apply discount', () => {
            console.log('Test ');
            productsService.allowDiscount = true;

            // Arrange
            const productsServiceUnderTest = new ProductsService();

            // Act
            const receivedPrice = productsServiceUnderTest.calculatePrice(100, true, false);

            // Assert
            if (receivedPrice != 90) {
                throw new Error('No 10% discount');
            }
        });

        test('When 2 product exist for a category, get 2 in return for that category', () => {
            // Arrange
            productsService.allowDiscount = false;
            const productsServiceUnderTest = new ProductsService();
            const product1 = productsServiceUnderTest.addProduct('War & peace', 100, 'books');
            const product2 = productsServiceUnderTest.addProduct('Moby dick', 120, 'books');

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
    });

    describe('Missing inputs', () => {
        test('When no price provided, then an error should be thrown', () => {
            // Arrange
            const nullPrice = undefined;
            const productsServiceUnderTest = new ProductsService();

            // Act
            const addProductWithEmptyPrice = productsServiceUnderTest.addProduct.bind(this, 'Dracula', nullPrice, 'books');

            // Assert
            expect(addProductWithEmptyPrice).toThrowError();
        });
    });
});