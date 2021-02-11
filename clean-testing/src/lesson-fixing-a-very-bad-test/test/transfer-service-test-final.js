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
      // Arrange
      const transferRequest = testHelpers.factorMoneyTransfer({
        sender: {credit: 50},transferAmount: 100});
      const transferServiceUnderTest = testHelpers.factorTransferService();

      // Act
      transferServiceUnderTest.transfer(transferRequest);

      // Assert
      const senderTransfersHistory = transferServiceUnderTest.getTransfers(transferRequest.sender.name);
      expect(senderTransfersHistory).not.toContain(transferRequest);
    });
  });


  describe('By Countries', () => {
    test('When sender from Italy sends a valid payment, transfer is approved', () => {
      // Arrange
      const transferRequest = testHelpers.factorMoneyTransfer({
        sender: {
          credit: 50,
          country: 'Italy'
        },
        transferAmount: 100,
      });
      transferRequest.id = 1;
      const transferServiceUnderTest = testHelpers.factorTransferService();

      // Act
      transferServiceUnderTest.transfer(transferRequest);

      // Assert
      const senderTransfersHistory = transferServiceUnderTest.getTransfers(transferRequest.sender.name);
      expect(senderTransfersHistory).not.toContain(transferRequest);
    });

    test('When sender from India sends a valid payment, transfer is approved', () => {
      // Arrange
      const transferRequest = testHelpers.factorMoneyTransfer({
        sender: {
          credit: 50,
          country: 'India'
        },
        transferAmount: 100,
      });
      transferRequest.id = 1;
      const transferServiceUnderTest = testHelpers.factorTransferService();

      // Act
      transferServiceUnderTest.transfer(transferRequest);

      // Assert
      const senderTransfersHistory = transferServiceUnderTest.getTransfers(transferRequest.sender.name);
      expect(senderTransfersHistory).not.toContain(transferRequest);
    });

    test('When sender from US sends a valid payment, transfer is approved', () => {
      // Arrange
      const transferRequest = testHelpers.factorMoneyTransfer({
        sender: {
          credit: 50,
          country: 'US'
        },
        transferAmount: 100,
      });
      transferRequest.id = 1;
      const transferServiceUnderTest = testHelpers.factorTransferService();

      // Act
      transferServiceUnderTest.transfer(transferRequest);

      // Assert
      const senderTransfersHistory = transferServiceUnderTest.getTransfers(transferRequest.sender.name);
      expect(senderTransfersHistory).not.toContain(transferRequest);
    });

    test('When sender from Germany sends a valid payment, transfer is approved', () => {
      // Arrange
      const transferRequest = testHelpers.factorMoneyTransfer({
        sender: {
          credit: 50,
          country: 'Germany'
        },
        transferAmount: 100,
      });
      transferRequest.id = 1;
      const transferServiceUnderTest = testHelpers.factorTransferService();

      // Act
      transferServiceUnderTest.transfer(transferRequest);

      // Assert
      const senderTransfersHistory = transferServiceUnderTest.getTransfers(transferRequest.sender.name);
      expect(senderTransfersHistory).not.toContain(transferRequest);
    });

    test('When sender from Argentina sends a valid payment, transfer is approved', () => {
      // Arrange
      const transferRequest = testHelpers.factorMoneyTransfer({
        sender: {
          credit: 50,
          country: 'Argentina'
        },
        transferAmount: 100,
      });
      transferRequest.id = 1;
      const transferServiceUnderTest = testHelpers.factorTransferService();

      // Act
      transferServiceUnderTest.transfer(transferRequest);

      // Assert
      const senderTransfersHistory = transferServiceUnderTest.getTransfers(transferRequest.sender.name);
      expect(senderTransfersHistory).not.toContain(transferRequest);
    });
  })
});





;