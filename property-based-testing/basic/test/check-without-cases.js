test.todo("Convert this to test case");



function calculatePriceOffer(userType, productPrice, isOnSale) {
    console.log(`${userType} | ${productPrice} | ${isOnSale}`);
    //calculate
}

//calculatePriceOffer("Premium" , 500, true);

const {check, gen, property} = require('testcheck');
property(
    gen.oneOf(['Premium', 'Regular']), gen.int, gen.boolean,
    (userType, productPrice, isOnSale) => {
        calculatePriceOffer(userType, productPrice, isOnSale);
    }
)

