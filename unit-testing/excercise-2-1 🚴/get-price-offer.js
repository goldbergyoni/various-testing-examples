const emailProvider = require('./email-provider');
const dataAccess = require('./data-access');

class GetPriceOffer {
    constructor(optionalDataAccessProvider, optionalEmailProvider) {
        this.dataAccess = optionalDataAccessProvider || dataAccess;
        this.emailProvider = optionalEmailProvider || emailProvider;
    }

    //This is the main method that sends a price offer for a given product and user
    submitAndReceive(productId, user) {
        const product = this.dataAccess.getProduct(productId);
        let price;

        if (!product || !user) {
            throw new Error('Product or user dont exist!');
        }

        if (user.class === "premium") {
            price = product.price * 0.9;
        } else {
            price = product.price * 0.99;
        }

        this.emailProvider.sendEmail(user.email, `The price for ${product.name} is ${price}`,
            `Long explanation comes with here with many dynamic test like ${product.price} `);

        return price;
    }
}

module.exports = GetPriceOffer;