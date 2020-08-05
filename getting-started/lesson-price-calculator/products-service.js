let products = [];

class ProductsService {
    calculatePrice(catalogPrice, isOnSale, isPremiumUser) {
        let finalPrice = catalogPrice;

        if (isOnSale) {
            finalPrice *= 0.9;
        }

        if (isPremiumUser) {
            finalPrice *= 0.9;
        }

        //A bunch of other IF/ELSE

        return finalPrice;
    }

    addProduct(name, price, category) {
        if (!name || !price) {
            const errorToThrow = new Error("Some properties are missing");
            errorToThrow.name = "invalidInput";
            throw errorToThrow;
        }

        const productToAdd = {
            name,
            price,
            category
        };

        products.push(productToAdd);


        return productToAdd;
    }

    async getProducts(category) {
        //Intentionally put timeout to make it real async like API/DB call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = products.filter((aProduct) => aProduct.category === category);
                resolve(result);
            }, 0);
        });
    }

    //Meant to demonstrate testing when callbacks exist
    async deleteProduct(name, callback) {
        const updatedProductsList = products.filter((aProductToCheck) => aProductToCheck.name !== name);
        products = updatedProductsList;
        const result = updatedProductsList ? true : false;

        callback(null, {
            succeed: result
        });
    }


}


module.exports = ProductsService;


// if (catalogPrice > 300 && isOnSale && isPremiumUser) {
//     finalPrice *= 0.85;
// }