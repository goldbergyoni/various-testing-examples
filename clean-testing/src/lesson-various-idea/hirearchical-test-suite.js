describe('Calculate Price', () => {
    describe('Discounts and sales', () => {
        test('When product is on sale, then apply discount', () => {});

        test('When premium customer and on sale, then the price is 20% off', () => {});
        test('When no price specified, then exception is thrown', () => {});

        test('When not on sale or premium, then apply 0% discount', () => {});
        test('When product is on sale, then apply discount', () => {});

        test('When product is on sale, then apply discount', () => {});

        test('When product is on sale, then apply discount', () => {});


        test('When product is on sale, then apply discount', () => {});
    });

    describe('Coupon', () => {
        test('When has 5% coupon and on sale, then apply 5% discount and not more', () => {});
        test('When has 5% coupon, then apply 5% discount', () => {});
        test('When coupon has expired, then apply 0% discount', () => {});
    });

    describe('Missing inputs', () => {
        test('When no isPremium specified, then exception is thrown', () => {});

        test('When all input is null, then exception is thrown', () => {});
        test('When no price specified, then exception is thrown', () => {
            expect(false).toBe(true);
        });
        test('When 2 input params are null, then throw exception', () => {});
        test('When no onSale parameter specified, then exception is thrown', () => {
            expect(false).toBe(true);
        });
        test('When no isPremium specified, then exception is thrown', () => {
            expect(false).toBe(true);
        });
    });
});