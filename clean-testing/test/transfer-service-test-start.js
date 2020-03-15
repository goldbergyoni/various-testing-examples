// inheritance, global object, abstract helper, try-catch, magic number, similar cases,
// foo input, name & hirearchy, test reports,
const TransferService = require('../transfer-service-under-test');
const testHelpers = require('./test-helpers');
const bankingProvider = require('../banking-provider');
const dbRepository = require('../db-repository');


let serviceUnderTest;

describe('Transfer Service', () => {
  beforeAll(async () => {
    const options = { // ❌
      creditPolicy: 'zero',
    };
    serviceUnderTest = new TransferService(options, bankingProvider, dbRepository);
  });
  test('❌ Should decline', () => {
    // Arrange
    const unauthorizedTransferToAdd = testHelpers.factorMoneyTransfer({});
    const transferResponse = serviceUnderTest.transfer(unauthorizedTransferToAdd);
    testHelpers.configureTransferService(serviceUnderTest);

    // Act
    const allUserTransfers = serviceUnderTest.getTransfers(unauthorizedTransferToAdd.user.name);

    // Assert
    expect(transferResponse.status).toBe('Declined');
    expect(serviceUnderTest.lastOneApproved).toBe(false);
    let transferFound = false;
    allUserTransfers.forEach((singleTransfer) => {
      if (singleTransfer === unauthorizedTransferToAdd) {
        transferFound = true;
      }
    });
    expect(transferFound).toBe(false);
  });

  test('Should throw exception', () => {
    
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
