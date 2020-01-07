const request = require('supertest');
const express = require('express');
const sinon = require('sinon');
const nock = require('nock');
const apiUnderTest = require('../api-under-test');
const mailer = require('../libraries/mailer');
const OrderRepository = require('../data-access/order-repository');


let expressApp;
let expressConnection;
let sinonSandbox;

beforeAll(async (done) => {
  /* #region  ⚙️ Open DB connection */

  /*  #region ️️️⚙️ Open 'mocking' sandbox */
  sinonSandbox = sinon.sandbox.create();
  /* #endregion */

  /* #region ⚙️ Open API connection */
  expressApp = express();
  expressConnection = expressApp.listen(() => {
    // no port specified
    apiUnderTest(expressApp);

    // 👍🏼 We're ready
    done();
    /* #endregion */
  });
}, 20000);

afterAll(() => {
  if (expressConnection) {
    expressConnection.close();
  }
});

beforeEach(() => {
  if (sinonSandbox) {
    sinonSandbox.restore();
  }
});

test.todo('Just a placeholder for tests');

describe('/api', () => {
  describe('POST /order', () => {
    test('When an error occurs, send mail to admin', async () => {
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
      const spyOnMailer = sinon.spy(mailer, 'send');
      sinonSandbox.stub(OrderRepository.prototype, 'addOrder')
        .throws(new Error('Unknown error'));
      process.env.SEND_MAILS = 'true';

      // Act
      const receivedResponse = await request(expressApp)
        .post('/order')
        .send(orderToAdd);

      // Assert
      expect(spyOnMailer.called).toBe(true);
    });


    test.each(new Array(100).fill(''))
    ('When a valid order is passed , It should ensure it exists', async () => {
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
      const receivedResponse = await request(expressApp)
        .post('/order')
        .send(orderToAdd);

      // Assert
      const {
        status,
        body,
      } = receivedResponse;
      expect({
        status,
        body,
      }).toMatchObject({
        status: 200,
        body: {
          mode: 'approved',
        },
      });
    });

    test('When no product specified , It should return 400 status http', async () => {
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
      expect(receivedResponse.status).toBe(400);
    });
  });
  describe('GET /order', () => {
    test.todo('When quering for approved order, get only approved');
  });
});
