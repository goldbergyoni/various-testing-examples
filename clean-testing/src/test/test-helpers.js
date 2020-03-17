const TransferServiceUnderTest = require('../transfer-service');
const bankingProvider = require('../banking-provider');
const dbRepository = require('../db-repository');


module.exports = {
  factorMoneyTransfer: (transferProperties) => {
    const defaultTransfer = {
      sender: {
        credit: 30,
        name: 'Daniel',
        country: 'US',
      },
      howMuch: 100,
      receiver: 'Rose',
      bank: 'Bank Of America',
    };

    return Object.assign(transferProperties, defaultTransfer);
  },

  getSupportedCountries: () => ['Italy', 'US', 'Uruguay', 'Germany', 'Russia', 'India'],

  factorTransferService: () => {
    const options = {
      creditPolicy: 'zero',
    };
    const transferService = new TransferServiceUnderTest(options, bankingProvider, dbRepository);


    return transferService;
  },
};
