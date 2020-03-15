// inheritance, global object, abstract helper, try-catch, magic number, similar cases,
// foo input, name & hirearchy, test reports,
const TransferService = require('../transfer-service-under-test');
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
  beforeAll(async () => {
    const options = { // ❌
      creditPolicy: 'zero',
    };
    serviceUnderTest = new TransferService(options, dbRepository, bankingProvider);
  });
  test('❌ Should decline', () => {
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
      transferServiceUnderTest.transfer(); // Didn't provide mandatory inputs
    } catch (e) {
      wasErrorFound = true;
      errorType = e.code;
    }

    expect(wasErrorFound).toBe(true);
    expect(errorType).toBe('invalidInput');
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
