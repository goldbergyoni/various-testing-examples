const TransferServiceUnderTest = require('../transfer-service');
const bankingProvider = require('../banking-provider');
const dbRepository = require('../db-repository');


module.exports = {
  factorMoneyTransfer: (transferProperties) => {
    const defaultTransfer = {
      user: {
        name: 'Daniel',
        credit: 30,
      },
      howMuch: 100,
      toWhom: 'Rose',
      bank: 'Bank Of America',
    };

    return Object.assign(transferProperties, defaultTransfer);
  },

  factorTransferService: () => {
    const options = {
      creditPolicy: 'zero',
    };
    const transferService = new TransferServiceUnderTest(options, bankingProvider, dbRepository);


    return transferService;
  },
};
