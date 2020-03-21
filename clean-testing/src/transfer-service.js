const uuid = require('uuid');

//I know to transfer money
module.exports = class TransferService {
  constructor(options, repository, bankProvider) {
    this.configuration = options;
    this.repository = repository; // Data access
    this.bankProvider = bankProvider; // Really sending money
  }

  transfer({
    id,
    sender,
    receiver,
    transferAmount,
    bankName
  }) {
    // Validation
    if (!sender || !receiver || !transferAmount || !bankName) {
      const invalidInputException = new Error('Some mandatory property was not provided');
      invalidInputException.code = 'invalidInput';
      throw invalidInputException;
    }

    // Define defaults
    this.lastOneApproved = false;
    const date = new Date();
    id = uuid.v1();
    // Handle insufficient credit
    if (sender.credit < transferAmount) {
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

  getTransfers(username) {
    return [{
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
    }];
  }
};