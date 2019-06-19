const TransferService = require('../transfer-service-under-test');

const serviceUnderTest = new TransferService();


describe.skip('Transfer Service', () => {
    test('Anti: When trying to exceed credit, transfer doesnt appear in my trasfers', () => {
        //Arrange
        const unauthorizedTransferToAdd = helper.getTransfer({
            user: {
                credit: 50
            },
            howMuch: 100
        });
        const transferResponse = serviceUnderTest.transfer(unauthorizedTransferToAdd);
        helper.configureTransferService(serviceUnderTest);

        //Act
        const allUserTransfers = serviceUnderTest.getTransfers(unauthorizedTransferToAdd.user.name);

        //Assert
        expect(allUserTransfers).not.toContainEqual(unauthorizedTransferToAdd);
    });

    test.skip('When trying to exceed credit, transfer doesnt appear in user history', () => {
        //Arrange
        const serviceUnderTest = new TransferService();
        const unauthorizedTransferToAdd = helper.getTransfer({user:{credit:50}, howMuch:100});
        const transferResponse = serviceUnderTest.transfer(unauthorizedTransferToAdd);

        //Act
        const allUserTransfers = serviceUnderTest.getTransfers(unauthorizedTransferToAdd.user.name);

        //Assert
        expect(allUserTransfers).not.toContainEqual(unauthorizedTransferToAdd);
    })
});

const helper = {
    getTransfer: (transferProperties) => {
        const defaultTransfer = {
            user: {
                name: 'Daniel',
                credit: 30
            },
            howMuch: 100,
            toWhom: "Rose",
            bank: "Bank Of America"
        };
        
        return Object.assign(transferProperties , defaultTransfer);
    },
    configureTransferService: () => {
        //I don't really do anything
    }
}