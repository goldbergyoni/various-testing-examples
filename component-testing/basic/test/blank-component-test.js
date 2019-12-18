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


test.todo('Just a placeholder for tests');

describe.skip('/api', () => {
  describe('POST /orders', () => {
    test.todo('When adding a valid order, the order exists for querying');

    test('When an order without product is specified, Then get back 400 error', async () => {
      // Arrange
      const orderToAdd = {
        userId: 1,
        mode: 'approved',
      };

      // Act
      const receivedResponse = await request(expressApp)
        .post('/order')
        .send(orderToAdd);

      // Assert
      expect(receivedResponse.status).toEqual(400);
    });
  });

  describe('GET /orders', () => {
    test.todo('When adding a order without product, 400 error is returned');
  });
});
