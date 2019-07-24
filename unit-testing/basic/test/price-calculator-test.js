const customerClassifier = require('../classify-customer')

describe.skip('Customer classifier', () => {
    test('When customer spent more than 500$, should be classified as premium', () => {
        //Arrange
        const customerToClassify = {spent:505, joined: new Date(), id:1}
        const DBStub = sinon.stub(dataAccess, "getCustomer")
            .reply({id:1, classification: 'regular'});

        //Act
        const receivedClassification = customerClassifier.classifyCustomer(customerToClassify);

        //Assert
        expect(receivedClassification).toMatch('premium');
    });

    //Anti-pattern: for demo purposes
    test('It should return a premium user', () => {
        const customerToClassify = {
            spent: 505,
            joined: new Date(),
            returns: 1
        }
        const receivedClassification = customerClassifier.classifyCustomer(customerToClassify);
        expect(receivedClassification).toMatch('premium');
    });



    test('When number of returns is not specified, should throw an exception', () => {
        //Arrange
        const undefinedNumberOfReturn = undefined;

        //Act
        const classifyCustomerMethodWithEmptyReturn = customerClassifier.classifyCustomer.bind(505, new Date(), undefinedNumberOfReturn);

        //Assert
        expect(classifyCustomerMethodWithEmptyReturn).toThrow();
    });

    //This is an Anti-pattern used for demonstration
    test('When number of returns is not specified, should throw an exception (example2)', () => {
        //Arrange
        const undefinedNumberOfReturn = undefined;

        //Act
        let didFail = false;
        try {
            customerClassifier.classifyCustomer(505, new Date(), undefinedNumberOfReturn);
        } catch (error) {
            didFail = true;
        }

        //Assert
        expect(didFail).toBe(true);
    });
});