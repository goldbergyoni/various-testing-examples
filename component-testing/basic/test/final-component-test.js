const request = require("supertest");
const express = require("express");
const sinon = require("sinon");
const path = require("path");
const apiUnderTest = require("../api-under-test");
const nock = require("nock");
const waitPort = require('wait-port');
const dockerCompose = require('docker-compose');

let expressApp, expressConnection, sinonSandbox;

beforeAll(async () => {
  return new Promise(async (resolve, reject) => {
    console.log('6');
    //Instantiate DB
    await dockerCompose.upAll({
      cwd: path.join(__dirname),
      log: true
    });
    console.log('7');
  
    //wait for db readiness
    await waitPort({
      host: 'localhost',
      port: 54320,
    });
    console.log('8');

    //open API connection
    expressApp = express();
    expressConnection = expressApp.listen(() => { //no port specified
      apiUnderTest(expressApp);

      //Open 'mocking' sandbox
      sinonSandbox = sinon.sandbox.create();

      //We're ready
      resolve()
    });    
  })
});

afterAll(() => {
  expressConnection.close();
})

afterEach(() => {
  sinonSandbox.restore();
});

/*eslint-disable */
describe.skip('/api #final', () => {
  describe("POST /orders", () => {
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
        .ok(response => true);

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

  describe("GET /orders", () => {
    test('When none order exists, return an empty array', () => {
      expect(true).toBe(true);
    });

    test('When an order exists, retur it successfully', () => {
      expect(true).toBe(true);
    });
  });

  describe("GET /orders/payments", () => {
    test('When none order exists, return an empty array', () => {
      expect(true).toBe(true);
    });

    test('When an order exists, retur it successfully', () => {
      expect(true).toBe(true);
    });
  });
});
/*eslint-enable */
;