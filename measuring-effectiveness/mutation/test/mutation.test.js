const OrderServiceUnderTest = require("../order-service");

describe("Order service calculate price", () => {
  it("Scenario - Premium user. Expectation - get 10% discount yeah", () => {
    const priceToTest = new OrderServiceUnderTest().CalculatePrice("premium", 100, false);
    expect(priceToTest).toBe(90);
  });

  it("Scenario - Item on discounts. Expectation - get 20% discount yeah", () => {
    const priceToTest = new OrderServiceUnderTest().CalculatePrice("regular", 100, true);
    expect(priceToTest).toBe(80);
  });
});