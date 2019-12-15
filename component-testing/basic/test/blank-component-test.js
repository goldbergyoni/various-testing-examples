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