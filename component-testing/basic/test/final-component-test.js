const isPortReachable = require('is-port-reachable');
const request = require('supertest');
const express = require('express');
const sinon = require('sinon');
const path = require('path');
const isCI = require('is-ci');
const nock = require('nock');
const waitPort = require('wait-port');
const dockerCompose = require('docker-compose');
const apiUnderTest = require('../api-under-test');
const mailer = require('../mailer');

let expressApp;
let expressConnection;
let
  sinonSandbox;

beforeAll(async (done) => {
  console.time('test-setup');
  // Instantiate DB
  const isDBReachable = await isPortReachable(54320);
  if (!isDBReachable) {
    await dockerCompose.upAll({
      cwd: path.join(__dirname),
      log: true,
    });
    await waitPort({
      host: 'localhost',
      port: 54320,
    });
  }


  // open API connection
  expressApp = express();
  expressConnection = expressApp.listen(() => { // no port specified
    apiUnderTest(expressApp);

    // Open 'mocking' sandbox
    sinonSandbox = sinon.sandbox.create();
    console.time('test-setup');

    // We're ready
    done();
  });
}, 20000);

afterAll(() => {
  if (expressConnection) {
    expressConnection.close();
  }

  if (isCI) {
    dockerCompose.down();
  }
});


beforeEach(() => {
  if (sinonSandbox) {
    sinonSandbox.restore();
  }
});

/*eslint-disable */
describe('/api #final', () => {
  describe("POST /orders", () => {

    test.todo('When adding order without product, return 400');

    test("When adding  a new valid order , Then should get back 200 response", async () => {
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
    });

    test('When order failed, send mail to admin', async () => {
      //Arrange
      const spyOnMailer = sinon.spy(mailer, "send");
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
      process.env.SEND_MAILS = 'true';

      //Act
      const receivedResponse = await request(expressApp)
        .post("/order")
        .send(orderToAdd);

      //Assert
      expect(spyOnMailer.called).toBe(true);
    });


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
  });

  describe('GET /orders', () => {
    test('When filtering for canceled orders, should show only relevant items', () => {
      expect(true).toBe(true);
    });
  });

  describe('POST /orders/invoice', () => {
    test('When filtering for past orders, should show only relevant items', () => {
      expect(true).toBe(true);
    });
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