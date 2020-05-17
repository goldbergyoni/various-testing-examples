const uuid = require('uuid');
const userServiceWrapper = require('./user-service-wrapper');
const dbRepository = require('./db-repository');
const bankingProvider = require('./banking-provider');

//I know to transfer money
module.exports = class TransferService {
  constructor(customNotifier) {
    this.customNotifier = customNotifier; // Custom success notification logic
  }

  transfer({
    sender,
    receiver,
    transferAmount
  }) {

    const senderAccount = userServiceWrapper.getUser(sender.id);
    if (senderAccount === null) {
      return {
        id: uuid.v1(),
        status: 'declined',
        reason: 'userDoesntExist'
      };
    }

    if (sender.credit < transferAmount) {
      return {
        id: uuid.v1(),
        status: 'declined',
        reason: 'noCredit'
      };
    }

    // All good, save
    bankingProvider.transfer(sender, receiver, transferAmount, bankName); //  ❌ Could we write better code?
    dbRepository.save({
      sender,
      receiver,
      transferAmount,
      bankName,
    });

    return {
      id: uuid.v1(),
      status: 'approved',
    };
  }

  getTransfers(username) {
    return [];
  }
};