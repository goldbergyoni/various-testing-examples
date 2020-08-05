const uuid = require('uuid');

//I know to transfer money
module.exports = class TransferService {
  constructor(options, repository, bankProvider) {
    this.options = options;
    this.repository = repository; // Data access
    this.bankProvider = bankProvider; // Really sending money
    this.numberOfDeclined = 0;
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
    this.numberOfDeclined++;
    const date = new Date();
    id = uuid.v1();

    // Handle insufficient credit
    if (this.options.creditPolicy === 'zero' && sender.credit < transferAmount) {
      return {
        id,
        status: 'declined',
        date,
      };
    }

    // All good, let's save
    this.bankProvider.transfer(sender, receiver, transferAmount, bankName); //  ❌ Could we write better code?
    this.repository.save({
      sender,
      receiver,
      transferAmount,
      bankName,
    });

    return {
      id,
      status: 'approved',
      date: new Date(),
    };
  }

  getTransfers(username) {
    return [];
  }
};