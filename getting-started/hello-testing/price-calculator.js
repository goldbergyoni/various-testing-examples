const products = [];

function calculatePrice(catalogPrice, isOnSale, isPremiumUser) {
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

function addProduct(name, price, category) {
    if (!name || !price) {
        throw new Error("Some properties are missing");
    }

    products.push({
        name,
        price,
        category
    })
}

function getProducts(category) {
    return products.filter((aProduct) => aProduct.category === category);
}

module.exports.calculatePrice = calculatePrice;
module.exports.addProduct = addProduct;
module.exports.getProducts = getProducts;