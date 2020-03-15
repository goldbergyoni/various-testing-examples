const uuid = require('uuid');

module.exports = class TransferService {
  configure(options, repository, bankProvider) {
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
    const id = uuid();
    const date = new Date();

    // Handle insufficent credit
    if (fromWhom.credit > howMuch) {
      return {
        id,
        approved: false,
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
      approved: true,
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
