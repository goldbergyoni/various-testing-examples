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
    test("When the user does not exist, return http 404", async () => {
      //Arrange
      nock("http://localhost/user/")
        .get(`/1`)
        .replyWithError({
          'message': 'User does not exist',
          'code': 'nonExisting',
        });
      const orderToAdd = { userId: 1, productId: 2, mode: "draft" };
      process.env.MY_VARIABLE = 'ahoy';

      //Act
      const orderAddResult = await request(expressApp)
        .post("/order")
        .send(orderToAdd);

      //Assert
      expect(orderAddResult.status).toBe(404);
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
