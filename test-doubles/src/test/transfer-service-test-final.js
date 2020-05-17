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
    test('When user does not exist, Then it should decline', () => {
      // Arrange
      const transferRequest = testHelpers.factorMoneyTransfer({
        sender: {
          credit: 50
        },
        transferAmount: 20
      });//??
      const transferServiceUnderTest = new transferService({});

      // Act
      const transferResponse = transferServiceUnderTest.transfer(transferRequest);

      // Assert
      expect(transferResponse.status).toBe('declined');
      expect(transferResponse.reason).toBe('userDoesntExist');
    });
  });

  test('When no sender specified, should throw invalid details error', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
  });

  test('When no receiver specified, should throw invalid details error', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
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

describe('No credit', () => {
  test('When user is deleted, should not approve the transfer', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true, 'it should be like this').toBe(true);
  });

  test('When user has no credit, should not approve the transfer', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
  });

  test('When receiver lives in forbidden country, should not approve the transfer', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
  });

  test('When asking to transfer more than credit, the declined transfer does not appear sender history', () => {
    expect(true).toBe(true);
  });
});





;