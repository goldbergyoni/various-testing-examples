const request = require("supertest");
const express = require("express");
const nock = require("nock");
const apiUnderTest = require("../api-under-test");

let expressApp;
let expressConnection;

beforeAll(() => {
  expressApp = express();
  expressConnection = expressApp.listen(); // no port specified
  apiUnderTest(expressApp);
});

afterAll(() => {
  expressConnection.close();
});

test.todo("Just a placeholder for tests");

describe('/api/orders', () => {
  test("When adding a valid order , Then it should return a positive 200 result", async () => {
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
    const receivedResponse = await request(expressApp)
      .post("/order")
      .send(orderToAdd);

    //Assert
    const {
      status,
      body
    } = receivedResponse;

    const a = 5;

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