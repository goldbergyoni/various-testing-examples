/* eslint-disable */
const httpRequest = require('supertest');
const express = require('express');
const sinon = require('sinon');
const nock = require('nock');
const apiUnderTest = require('../api-under-test');
const mailer = require('../libraries/mailer');
const OrderRepository = require('../data-access/order-repository');

let expressApp;
let expressConnection;
let sinonSandbox;

test('When adding a new valid order, Then get back approval', async () => {
  // Arrange
  const orderToAdd = {userId: 1,productId: 2};
  nock('http://localhost/user/')
    .get('/1')
    .reply(200, {id: 1,name: 'John',});

  // Act
  const receivedAPIResponse = await httpRequest('/orders')
    .post('/order').send(orderToAdd);

  // Assert
  expect(receivedAPIResponse.body).toMatchObject({
    status: 200,
    body: {status: 'approved'},
  });
  expect(receivedAPIResponse.body).toConformToSpec('./public/swagger')
});


