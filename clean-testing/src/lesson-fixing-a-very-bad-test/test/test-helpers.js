const TransferServiceUnderTest = require('../transfer-service');
const bankingProvider = require('../banking-provider');
const dbRepository = require('../db-repository');


module.exports = {
  factorMoneyTransfer: (transferProperties) => {
    const defaultTransfer = {
      id: 'some-random-number-123456789',
      sender: {
        credit: 30,
        name: 'Daniel',
        country: 'US',
      },
      transferAmount: 100,
      receiver: {
        name: 'Rose',
        email: 'rose@gmail.com'
      },
      bankName: 'Bank Of America',
    };

    return Object.assign(transferProperties, defaultTransfer);
  },

  verifyIfMailWasSentToTransfer: () => {
    //pseudo function, part of demo
    return true;
  },

  getSupportedCountries: () => ['Italy', 'US', 'Uruguay', 'Germany', 'Russia', 'India'],

  factorTransferService: () => {
    const options = {
      creditPolicy: 'zero',
      sendMailOnDecline: true
    };
    const transferService = new TransferServiceUnderTest(options, bankingProvider, dbRepository);


    return transferService;
  },
};