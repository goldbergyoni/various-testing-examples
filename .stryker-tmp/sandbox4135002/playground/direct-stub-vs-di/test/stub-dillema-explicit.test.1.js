

//file: order-service.js
class OrderService{
    constructor(mailProvider){
        //no 'real' client will ever change the email provider, 
        //injected only for testing purposes
        this.mailProvider = mailProvider;
    }
    addOrder(order){
        console.log('New order');
        this.mailProvider.send(order.email , "Hello");
    }
}

//file: order-service.unit.test.js
const sinon = require('sinon');
test('When adding order, an email is sent #stub-dilemma', () => {
    //Arrange
    const mailSentSpy = sinon.spy();
    const unitUnderTest = new OrderService({send:mailSentSpy});
    //Rest is obvious, we assert that the mail was sent

    //Act
    unitUnderTest.addOrder({product:'iphone', mail:'john@company.com'})

    //Assert
    expect(mailSentSpy.called).toBe(true);
});