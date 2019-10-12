const request = require("supertest");
const express = require("express");
const apiUnderTest = require("../api-under-test");
const nock = require("nock");
const {
  GenericContainer
} = require("testcontainers");
let expressApp, expressConnection, pgContainer;

beforeAll(async() => {
  return new Promise(async (resolve, reject) => {
    expressApp = express();
    expressConnection = expressApp.listen(); //no port specified
    apiUnderTest(expressApp);
    console.log('before all1');
    // pgContainer = await new GenericContainer("postgres", "12.0")
    //   .withExposedPorts(5432)
    //   .start();
    console.log('before all2');
    
    resolve();
  });
});

afterAll(() => {
  expressConnection.close();
})

/*eslint-disable */
describe.skip('/api/orders', () => {
  describe("POST /", () => {
    test("When adding a new valid order , Then should get back 200 response", async () => {
      //Arrange
      const orderToAdd = {
        userId: 1,
        productId: 2,
        mode: 'approved'
      };
      nock("http://localhost/user/")
        .get(`/1`)
        .reply(200, {
          id: 1,
          name: "John"
        });

      //Act
      const receivedAPIResponse = await request(expressApp)
        .post("/order")
        .send(orderToAdd);

      //Assert
      const {
        status,
        body
      } = receivedAPIResponse;

      expect({
        status,
        body
      }).toMatchObject({
        status: 200,
        body: {
          mode: 'approved'
        }
      });
    })

    test("When the user does not exist, return http 404", async () => {
      //Arrange
      nock("http://localhost/user/")
        .get(`/1`)
        .reply(404, {
          'message': 'User does not exist',
          'code': 'nonExisting',
        });
      const orderToAdd = {
        userId: 1,
        productId: 2,
        mode: "draft"
      };

      //Act
      const orderAddResult = await request(expressApp)
        .post("/order")
        .send(orderToAdd)
        .ok(response=>true);

      //Assert
      expect(orderAddResult.status).toBe(404);
    });

    test("When adding an order without specifying product, stop and return 400", async () => {
      //Arrange
      nock("http://localhost/user/").get(`/1`)
        .reply(200, {
          id: 1,
          name: "John"
        });
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
/*eslint-enable */
;