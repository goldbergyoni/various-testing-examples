// inheritance, global object, abstract helper, try-catch, magic number, similar cases,
// foo input, name & hirearchy, test reports,
const TransferService = require('../transfer-service');
const testHelpers = require('./test-helpers');
const bankingProvider = require('../banking-provider');
const dbRepository = require('../db-repository');


let serviceUnderTest;
const fromWhomUser = {
  name: 'Kent Beck',
  countryCode: 'IL',
  allowedCredit: 100,
};

describe('Transfer Service', () => {
  beforeAll(async () => { // ❌
    const options = {
      creditPolicy: 'zero',
    };
    serviceUnderTest = new TransferService(options, dbRepository, bankingProvider);
  });

  // ❌
  test('Should fail', () => {
    const unauthorizedTransferToAdd = testHelpers.factorMoneyTransfer({});
    const transferResponse = serviceUnderTest.transfer(fromWhomUser, {}, 110, 'Bank of America');
    const allUserTransfers = serviceUnderTest.getTransfers(unauthorizedTransferToAdd.user.name);
    expect(transferResponse.status).toBe('declined');
    expect(serviceUnderTest.lastOneApproved).toBe(false);

    // check that transfer was not saved
    let transferFound = false;
    allUserTransfers.forEach((singleTransfer) => {
      if (singleTransfer === unauthorizedTransferToAdd) {
        transferFound = true;
      }
    });
    expect(transferFound).toBe(false);
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
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
  });

  test('When sender from India sends a valid payment, transfer is approved', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
  });

  test('When sender from US sends a valid payment, transfer is approved', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
  });

  test('When sender from Germany sends a valid payment, transfer is approved', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
  });

  test('When sender from Argentina sends a valid payment, transfer is approved', () => {
    // This test is here only to exemplify how big test reports look like
    expect(true).toBe(true);
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
