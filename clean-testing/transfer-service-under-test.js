const uuid = require('uuid');

module.exports = class TransferService {
  constructor(options, repository, bankProvider) {
    this.configuration = options;
    this.repository = repository;
    this.bankProvider = bankProvider;
  }

  transfer(fromWhom, toWhom, howMuch, bankName) {
    // Validation
    if (!fromWhom || !toWhom || !howMuch || !bankName) {
      const invalidInputException = new Error('Some mandatory property wasnt provided');
      invalidInputException.code = 'invalidInput';
      throw invalidInputException;
    }

    // Define defaults
    this.lastOneApproved = false;

    const date = new Date();
    const id = uuid.v1();

    // Handle insufficent credit
    if (fromWhom.allowedCredit < howMuch) {
      return {
        id,
        status: 'declined',
        date,
      };
    }

    // All good, save
    this.bankProvider.transfer(fromWhom, toWhom, howMuch, bankName);
    this.repository.save({
      fromWhom,
      toWhom,
      howMuch,
      bankName,
    });

    return {
      status: 'approved',
      date: new Date(),
    };
  }

  getTransfers() {
    return [{
      toWhom: 'David',
      howMuch: 50,
      bankName: 'Bank Of Singapore',
    }, {
      toWhom: 'Ben',
      howMuch: 150,
      bankName: 'Bank Of America',
    }];
  }
};
