module.exports = class TransferService {
    configure(options) {
        this.configuration = options;
    }

    transfer({
        toWhom,
        howMuch,
        bankName
    }) {
        this.lastOneApproved = false;
        
        return {
            toWhom,
            howMuch,
            bankName,
            status: "Declined",
            date: new Date()
        }
    }

    getTransfers() {
        return [{
            toWhom: "David",
            howMuch: 50,
            bankName: "Bank Of Singapore"
        }, {
            toWhom: "Ben",
            howMuch: 150,
            bankName: "Bank Of America"
        }];
    }
}