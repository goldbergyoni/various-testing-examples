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

        test("Try matchers", () => {
            const receivedResult = {
                price: 100,
                name: "Moby dick",
                category: "books",
                isOnSale: true
            };

            // Arrays

            // True / False
            expect(receivedResult.isOnSale).toBe(true);
            expect(receivedResult.isOnSale).not.toBeNull();

            // Objects
            expect(receivedResult).toMatchObject({
                price: 100,
                name: "Moby dick",
                category: "books",
            })

            // Scalars
            expect(receivedResult.price).toBe(100);
            expect(receivedResult.price).toBeGreaterThan(50);
        })



        describe('getProductsByCategory', () => {
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

            test('When a product is on sale, then expect 10% discount', () => {
                /// Arrange
                const productService = new ProductsService();

                // Act
                const receivedPrice = productService.calculatePrice(100, true, false);

                // Assert
                expect(receivedPrice).toBe(90);
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

            test('Try matchers', () => {
                const receivedResult = [{
                    price: 100,
                    name: 'Moby dick',
                    category: 'books',
                    isOnSale: true
                }];

                // Arrays
                expect(receivedResult).toContainEqual({
                    price: 100,
                    name: 'Moby dick',
                    category: 'books',
                    isOnSale: true
                })

                // True / False
                expect(receivedResult[0].isOnSale).toBe(true);

                // Objects
                expect(receivedResult[0]).toMatchObject({
                    price: 100,
                    name: 'Moby dick'
                })

                // Scalars
                expect(receivedResult[0].price).toBe(100);
                expect(receivedResult[0].price).toBeLessThan(200);

            })

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

            test('When a product is on sale, then expect 10% discount - Without AAA', () => {
                const serviceConfig = {
                    allowDiscount: false
                };
                const productPrice = 100;
                const isOnSale = true;
                const productsServiceUnderTest = new ProductsService();
                productsServiceUnderTest.addProduct('War & peace', 100, 'books');
                productsServiceUnderTest.config = serviceConfig;
                const receivedPrice = productsServiceUnderTest.calculatePrice(productPrice, isOnSale, false);
                expect(receivedPrice).not.toBeNull();
                expect(receivedPrice).toBe(90);
            });
        });

        describe('Missing inputs', () => {
            test('When no price provided, then an error should be thrown', () => {
                /// Arrange
                const nullPrice = undefined;
                const productsServiceUnderTest = new ProductsService();

                // Act
                const addProduct = productsServiceUnderTest.addProduct.bind(this, 'Dracula', nullPrice, 'books');

                // Assert
                expect(addProduct).toThrowError();
            });

            test('Version 2: When no price provided, then an error should be thrown', () => {
                /// Arrange
                const nullPrice = undefined;
                const productsServiceUnderTest = new ProductsService();

                // Act
                const wrapperFunction = () => {
                    productsServiceUnderTest.addProduct('Dracula', nullPrice, 'book');
                }

                // Assert
                expect(wrapperFunction).toThrowError(expect.objectContaining({
                    name: 'invalidInput'
                }));
            });

            test('With try-catch: When no price provided, then an error should be thrown', () => {
                /// Arrange
                const nullPrice = undefined;
                const productsServiceUnderTest = new ProductsService();
                let errorThatWasCaught;

                // Act
                try {
                    productsServiceUnderTest.addProduct('Dracula', nullPrice, 'books');
                } catch (error) {
                    errorThatWasCaught = error
                }

                // Assert
                expect(errorThatWasCaught).not.toBeNull();
            })
        });
    });