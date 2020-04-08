test('When adding invalid product, then decline', () => {
    const productToAdd = {
        name: '', //empty
        color: 'red',
        weightInGrams: 20,
        codeName: 'TM',
        description: 'A very tasty fruit',
        priceForKilo: {
            currencies: {
                USD: 1,
                EURO: 0.8,
                CHF: 1,
                JPY: 0.3
            }
        }
    }
});

test('When adding invalid product, then decline', () => {
    const invalidProduct = getProduct();

    const receivedResult = addProduct(invalidProduct);

    expect(receivedResult).toBe(false);
});

test('When adding invalid product, then decline', () => {
    const invalidProduct = factorProduct({
        name: undefined
    });

    const receivedResult = addProduct(invalidProduct);

    expect(receivedResult).toBe(false);
});

const addProduct = () => {

}