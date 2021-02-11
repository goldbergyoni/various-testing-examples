const sinon = require('sinon');
const {
  ChargeSubscriber,
  MessageQueue,
  Mailer,
} = require('../application-with-message-queue');


test('When a user was charged, should get an email with explanation', () => {
  // Arrange
  const spyOnMailer = sinon.stub(Mailer.prototype, 'sendMail');
  const messageQueueSubscriberStub = sinon.stub(MessageQueue.prototype);
  messageQueueSubscriberStub.subscribe = (topicName, callback) => {
    callback({
      data: {
        userId: 1,
        amount: 50,
      },
    });
  };

  // Act
  new ChargeSubscriber().start();

  // Assert
  expect(spyOnMailer.called).toBe(true);
});
