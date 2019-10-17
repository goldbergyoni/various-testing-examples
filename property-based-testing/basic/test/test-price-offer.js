const {
    check,
    gen,
    property
} = require('testcheck');

require('jasmine-check').install();
const fc = require('fast-check');

const calculatePriceOffer = (userType, productPrice, isOnSale) => {
    console.log(userType, productPrice, isOnSale);
    //calculate
}

describe.skip('Property based testing examples', () => {
    test('When passing in all sort of valid inputs, price is always positive', () => {
        fc.assert(
            fc.property(fc.oneof(['premium', 'regular']), fc.integer(), fc.boolean(), (userType, price, isOnSale) => {
                const receivedPrice = calculatePriceOffer(userType, price, isOnSale);
                expect(receivedPrice).toBeGreaterThan(0);
            })
        );
    });

    test.each([
        [1, 1, 2],
        [1, 2, 3],
        [2, 1, 3]
    ])(
        '.add(%i, %i)',
        (a, b, expected) => {
            expect(a + b).toBe(expected);
        },
    )

    

    // check.test('When valid input is passed, expect a valid price',
    //     gen.oneOf('Premium, regular'), gen.int, gen.boolean,
    //     (userType, price, isOnSale) =>n {
    //         const receivedPrice = calculatePriceOffer(userType, price, isOnSale);
    //         //expect(receivedPrice).toBe(🤨);
    //     });
});

