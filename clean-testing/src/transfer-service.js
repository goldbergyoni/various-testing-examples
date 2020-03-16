const uuid = require('uuid');

module.exports = class TransferService {
  constructor(options, repository, bankProvider) {
    this.configuration = options;
    this.repository = repository;
    this.bankProvider = bankProvider;
  }

  transfer(sender, receiver, howMuch, bankName) {
    // Validation
    if (!sender || !receiver || !howMuch || !bankName) {
      const invalidInputException = new Error('Some mandatory property was not provided');
      invalidInputException.code = 'invalidInput';
      throw invalidInputException;
    }

    // Define defaults
    this.lastOneApproved = false;
    const date = new Date();
    const id = uuid.v1();

    // Handle insufficient credit
    if (sender.allowedCredit < howMuch) {
      return {
        id,
        status: 'declined',
        date,
      };
    }

    // All good, save
    this.bankProvider.transfer(sender, receiver, howMuch, bankName);
    this.repository.save({
      sender,
      receiver,
      howMuch,
      bankName,
    });

    return {
      id,
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
