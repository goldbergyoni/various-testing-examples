const request = require('supertest');
const express = require('express');
const nock = require("nock");
const apiUnderTest = require("../api-under-test");

let expressApp; let 
expressConnection;

beforeAll(() => {
  expressApp = express();
  expressConnection = expressApp.listen(); // no port specified
  apiUnderTest(expressApp);
});

afterAll(() => {
  expressConnection.close();
});
test.todo('Just a placeholder for tests');

test.skip('When a valid order is placed , Then get back an approved order', async () => {
  // Arrange
  const orderToAdd = {
    userId: 1,
    productId: 2,
    mode: 'approved',
  };
  nock('http://localhost/user/')
    .get('/1')
    .reply(200, {
      id: 1,
      name: 'John',
    });

  // Act
  const responseFromAPI = await request(expressApp)
    .post('/order')
    .send(orderToAdd);

  // Assert
  const {
    status,
    body,
  } = responseFromAPI;
  Date.now = jest.fn();
  
  expect(status).toBe(200);
});

const calculateOrderPrice = () => {
  throw new Error('The field order date is null');
};
