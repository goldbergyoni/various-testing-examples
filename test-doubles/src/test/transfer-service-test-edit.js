const sinon = require('sinon');
// inheritance, global object, abstract helper, try-catch, magic number, similar cases,
// foo input, name & hirearchy, test reports,
const naughtyStrings = require('naughty-strings');
const TransferService = require('../transfer-service');
const testHelpers = require('./test-helpers');
const bankingProvider = require('../banking-provider');
const dbRepository = require('../db-repository');

let serviceUnderTest;

describe('Transfer Service', () => {
  beforeAll(async () => { // ❌mockito.start({}) //big JSON that defines many routes and their behaviour

    const options = {
      creditPolicy: 'allowDebt',
      sendMailOnDecline: true,
    };
    serviceUnderTest = new TransferService(options, dbRepository, bankingProvider);
  });

  test('When there not enough credit, then it should not appear in transfer history', () => {
    // Arrange
    sinon.stub(bankProvider, "transfer").reply({
      decline: true
    });
    const serviceUnderTest = testHelpers.factorTransferService();
    const transferRequest = testHelpers.factorMoneyTransfer({
      sender: {
        credit: 50
      },
      transferAmount: 100
    });
    serviceUnderTest.options.creditPolicy = 'zero';

    // Act

    serviceUnderTest.transfer(transferRequest);


    // Assert
    // Let's get the user transfer history
    const allUserTransfers = serviceUnderTest.getTransfers(transferRequest.sender.name);
    expect(allUserTransfers).not.toContain(transferRequest);
  });

  test('When transfer needs some credit, then transfer is approved #flaky', () => {
    // Arrange
    const transferRequest = testHelpers.factorMoneyTransfer({
      sender: {
        credit: 50,
      },
      transferAmount: 100,
    });

    // Act
    const receivedResult = serviceUnderTest.transfer(transferRequest);

    // Assert
    expect(receivedResult.status).toBe('approved');
  });


  test('When account disabled with big JSON', () => {
    // Arrange
    const transferWithNotEnoughCredit = {
      id: 'some-random-number-123456789',
      sender: {
        credit: 30,
        name: 'Daniel',
        country: 'US',
      },
      transferAmount: 100,
      receiver: {
        name: 'Rose',
        email: 'rose@gmail.com',
      },
      bankName: 'Bank Of America',
    };
    const options = {
      creditPolicy: 'zero',
      sendMailOnDecline: true,
    };
    const serviceUnderTest = new TransferService(options, dbRepository, bankingProvider);


    // Act
    const transferResponse = serviceUnderTest.transfer(transferWithNotEnoughCredit);
    expect(transferResponse.status).toBe('declined'); // ❌


    // Assert
    const allUserTransfers = serviceUnderTest.getTransfers(transferRequest.sender.name);
    let transferFound = false;
    allUserTransfers.forEach((transferToCheck) => {
      if (transferToCheck.id === transferRequest.id) {
        transferFound = true;
      }
    });
    expect(transferFound).toBe(true);
  });


  test('Should throw exception', () => {
    const transferServiceUnderTest = new TransferService();
    let wasErrorFound = false;
    let errorType = 'invalidInput';

    try { // ❌
      transferServiceUnderTest.transfer(null, null, null, null); // Didn't provide mandatory inputs
    } catch (e) {
      wasErrorFound = true;
      errorType = e.code;
    }

    expect(wasErrorFound).toBe(true);
    expect(errorType).toBe('invalidInput');
  });

  test('When sender is not provided, should throw invalid input error', () => {
    // / Arrange
    const transferServiceUnderTest = new TransferService();

    // Act
    const aCallToTransferWithNulls = transferServiceUnderTest.transfer.bind('', '', '', '', '');

    // Assert
    expect(aCallToTransferWithNulls).toThrowError('Some mandatory property was not provided');
  });


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

  test('When user did not confirm his account, should not approve the transfer', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
  });

  test('When user has enough credit, should approve the transfer', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
  });

  test('When transfer is successful, should send mail to receiver', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
  });

  test('When transfer is successful, receiver balance should get topped up', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
  });

  test('When no amount specified, should throw invalid details error', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(false);
  });

  test('When transfer is with different currency, receiver gets using his own currency', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
  });

  test('When sender from Italy sends a valid payment, transfer is approved', () => {
    // Arrange
    const transferRequest = testHelpers.factorMoneyTransfer({
      sender: {
        credit: 50,
        country: 'Italy',
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

  test.each(testHelpers.getSupportedCountries())('When sender is from %s and transfer is valid, then should be approved', (country) => {
    const aTransferToCommit = {
      sender: {
        credit: 30,
        name: 'Daniel',
        country,
      },
      receiver: 'Rose',
      bank: 'Bank Of America',
    };

    const transferService = new TransferService({}, dbRepository, bankingProvider);
    const transferResponse = transferService.transfer(aTransferToCommit.sender, aTransferToCommit.receiver, 20, aTransferToCommit.bank);

    expect(transferResponse.status).toBe('approved');
  });

  test('When sender from India sends a valid payment, transfer is approved', () => {
    // Arrange
    const transferRequest = testHelpers.factorMoneyTransfer({
      sender: {
        credit: 50,
        country: 'India',
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
        country: 'US',
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
        country: 'Germany',
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
        country: 'Argentina',
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

  test.skip('When trying to exceed credit, transfer doesnt appear in user history', () => {
    // Arrange
    const serviceUnderTest = new TransferService();
    const unauthorizedTransferToAdd = helper.getTransfer({
      user: {
        credit: 50,
      },
      howMuch: 100,
    });
    const transferResponse = serviceUnderTest.transfer(unauthorizedTransferToAdd);

    // Act
    const allUserTransfers = serviceUnderTest.getTransfers(unauthorizedTransferToAdd.user.name);

    // Assert
    expect(allUserTransfers).not.toContainEqual(unauthorizedTransferToAdd);
  });
});