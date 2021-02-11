const transfers = [];

module.exports = {
  save: (aTransferToSave) => {
    this.transfers.push(aTransferToSave);
    console.log('Not really a DB repository');
  },
  get: (userName) =>{
    return transfers.filter((aTransfer) => aTransfer.user.name === userName);
  }
};

