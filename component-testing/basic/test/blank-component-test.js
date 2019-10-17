const request = require("supertest");
const express = require("express");
const nock = require("nock");
const apiUnderTest = require("../api-under-test");
const sinon = require("sinon");

let expressApp, expressConnection, sinonSandbox;

beforeAll(() => {
  return new Promise((resolve, reject) => {
    //Open DB connection

    //open API connection
    expressApp = express();

    expressConnection = expressApp.listen(() => { //no port specified
      apiUnderTest(expressApp);

      //Open 'mocking' sandbox
      sinonSandbox = sinon.sandbox.create();

      //We're ready
      return resolve();
    });
  });

});

afterAll(() => {
  expressConnection.close();
});

afterEach(() => {
  
  sinonSandbox.restore();
});

test.todo("Just a placeholder for tests");

describe.skip('/api #demo', () => {
  describe('POST /orders', () => {
    test("When a valid order is saved , Then expect a positive 200 result", async () => {
      //Arrange
      const orderToAdd = {
          userId: 1,
          productId: 2,
          mode: 'approved'
        };
      nock("http://localhost/user/")
              .get(`/1`)
              .reply(200, { id: 1, name: "John" });
    
      //Act
      const receivedResponse = await request(expressApp)
              .post("/order")
              .send(orderToAdd);
    
      //Assert
      const {status, body} = receivedResponse;
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
    });
  
  });

  describe('GET /orders', () => {

  });