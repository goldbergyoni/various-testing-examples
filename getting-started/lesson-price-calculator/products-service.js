const products = [];

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
            throw new Error("Some properties are missing");
        }

        const productToAdd = {
            name,
            price,
            category
        };

        products.push(productToAdd);

        return productToAdd;
    }

    getProducts(category) {
        return products.filter((aProduct) => aProduct.category === category);
    }
}


module.exports = ProductsService;


// if (catalogPrice > 300 && isOnSale && isPremiumUser) {
//     finalPrice *= 0.85;
// }