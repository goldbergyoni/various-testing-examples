const request = require("supertest");
const express = require("express");
const apiUnderTest = require("../api-under-test");
const nock = require("nock");

let expressApp, expressConnection;

beforeAll(() => {
  expressApp = express();
  expressConnection = expressApp.listen(); //no port specified
  apiUnderTest(expressApp);
});

afterAll(() => {
  expressConnection.close();
})

/*eslint-disable */
describe.skip("Order API #component", () => {
  describe("POST /orders", () => {
    test("When a valid order is posted, the added order is retrievable", async () => {
      //Arrange
      nock("http://localhost/user/")
        .get(`/1`)
        .reply(200, { id: 1, name: "John" });
      const orderToAdd = { userId: 1, productId: 2, mode: "draft" };

      //Act
      const orderAddResult = await request(expressApp)
        .post("/order")
        .send(orderToAdd);

      //Assert
      const { status, body } = orderAddResult;
      expect({ status, body }).toEqual({status:200, body:{mode:"draft", userId:1, productId:2}});
    });

    test("When adding an order without specifying product, stop and return 400", async () => {
      //Arrange
      nock("http://localhost/user/").get(`/1`)
        .reply(200, {id: 1,name: "John"});
      const orderToAdd = {
        userId: 1,
        mode: "draft"
      };

      //Act
      const orderAddResult = await request(expressApp)
        .post("/order")
        .send(orderToAdd);

      //Assert
      expect(orderAddResult.status).toBe(400);
    });
  });
});
/*eslint-enable */;
