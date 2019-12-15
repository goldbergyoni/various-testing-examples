class OrderService {
  CalculatePrice(userType, productPrice, isOnSale) {
    if (isOnSale) {
      return productPrice / 0.8;
    } else if (userType === "premium") {
      return productPrice * 0.9;
    }

    return productPrice;
  }
}

module.exports = OrderService;

//npm test -- --config=jest.config.mutation.js --watch