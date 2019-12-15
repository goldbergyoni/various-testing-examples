
// //file: order-service.js
// class OrderService{
//     addOrder(order){
//         console.log('New order');
//         mailProvider.send(order.email , "Hello");
//     }
// }

// //file: order-service.unit.test.js
// const sinon = require('sinon');
// const mailProvider = require('./mail-provider');
// test('When adding order, should send an email', () => {
//     //Arrange
//     const mailSentSpy = sinon.spy(mailProvider , 'send');
//     const unitUnderTest = new OrderService();

//     //Rest is obvious, we assert that the mail was sent

//     //Act
//     unitUnderTest.addOrder({product:'iphone', mail:'john@company.com'})

//     //Assert
//     expect(mailSentSpy.called).toBe(true);
// });