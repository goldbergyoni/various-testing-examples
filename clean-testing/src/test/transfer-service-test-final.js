const jestExtended = require('jest-extended');
const TransferService = require('../transfer-service');
const testHelpers = require('./test-helpers');
const transferService = require('../transfer-service');

describe('Transfer Service', () => {
  describe('Happy path', () => {
    test('When transfer is with different currency, receiver gets using his own currency', () => {
      // This test is here only to exemplify how big test reports look like
      expect(true).toBe(true);
    });

    test('When transfer is valid, get back a positive result', () => {
      // This test is here only to exemplify how big test reports look like
      expect(true).toBe(true);
    });

    test('When transfer is valid, a mail is sent to the receiver', () => {
      // This test is here only to exemplify how big test reports look like
      expect(true).toBe(true);
    });
  });

  describe('Missing inputs', () => {
    test('When no amount specified, should throw invalid details error', () => {
      // This test is here only to exemplify how big test reports look like
      expect(true).toBe(false);
    });

    test('When no sender specified, should throw invalid details error', () => {
      // This test is here only to exemplify how big test reports look like
      expect(true).toBe(false);
    });

    test('When no receiver specified, should throw invalid details error', () => {
      // This test is here only to exemplify how big test reports look like
      expect(true).toBe(false);
    });


    test('When no bank specified, should throw invalid details error', () => {
      // This test is here only to exemplify how big test reports look like
      expect(true).toBe(true);
    });
  });

  describe('Post transfer actions', () => {
    test('When transfer is successful, should send mail to receiver', () => {
      // This test is here only to exemplify how big test reports look like
      expect(true).toBe(true);
    });

    test('When transfer is successful, receiver balance should get topped up', () => {
      // This test is here only to exemplify how big test reports look like
      expect(true).toBe(true);
    });

    test('When transfer is successful, sender balance is updated with the transfer amount', () => {
      // This test is here only to exemplify how big test reports look like
      expect(true).toBe(true);
    });
  });
  
});

