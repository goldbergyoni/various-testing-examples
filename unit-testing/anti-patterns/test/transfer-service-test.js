const TransferService = require('../transfer-service-under-test');

let serviceUnderTest;

beforeAll(() => {
    serviceUnderTest = new TransferService();
    helper.configureTransferService(serviceUnderTest);
})



describe('Transfer Service', () => {
    //Anti-pattern test
    test('When transfer exceeds user credit, then transfer shouldnt appear in user transfers', () => {
        //Arrange
        const aTransferWithoutCredit = helper.getTransferJSON({});
        const transferResponse = serviceUnderTest.transfer(aTransferWithoutCredit);
        helper.configureTransferService(serviceUnderTest);

        //Act
        const allUserTransfers = serviceUnderTest.getTransfers(aTransferWithoutCredit.user.name);

        //Assert
        expect(transferResponse.status).toBe("Declined");
        expect(serviceUnderTest.lastOneApproved).toBe(false);
        let transferFound = false;
        allUserTransfers.forEach((singleTransfer) => {
            if (singleTransfer === aTransferWithoutCredit) {
                transferFound = true;
            }
        });
        expect(transferFound).toBe(false);
    });

    test.skip('When trying to exceed credit, transfer doesnt appear in user history', () => {
        //Arrange
        const serviceUnderTest = new TransferService();
        const unauthorizedTransferToAdd = helper.getTransfer({
            user: {
                credit: 50
            },
            howMuch: 100
        });
        const transferResponse = serviceUnderTest.transfer(unauthorizedTransferToAdd);

        //Act
        const allUserTransfers = serviceUnderTest.getTransfers(unauthorizedTransferToAdd.user.name);

        //Assert
        expect(allUserTransfers).not.toContainEqual(unauthorizedTransferToAdd);
    })
});

const helper = {
    getTransferJSON: (transferProperties) => {
        const defaultTransfer = {
            user: {
                name: 'Daniel',
                credit: 30
            },
            howMuch: 100,
            toWhom: "Rose",
            bank: "Bank Of America"
        };

        return Object.assign(transferProperties, defaultTransfer);
    },
    configureTransferService: () => {
        //I don't really do anything
    }
}