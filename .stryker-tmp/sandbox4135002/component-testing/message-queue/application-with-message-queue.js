class MessageQueueConnector {
    subscribe(topicName, callback) {
        console.log('Subscribe was called');
        setTimeout(() => {
            callback({
                data: 'real data from real MQ'
            });
        }, 1000);
    }

    publish(message) {
        console.log('Message was published');
    }
}

class MailerService {
    sendMail(toWhom, title, body) {
        console.log(`Send mail with ${body}`);
    }
}

class PaymentService {
    charge(who, howMuch) {
        console.log(`Charge the user ${who} with the amount of ${howMuch}`);
    }
}

class chargeService {
    charge(input) {
        return {
            data: 'fake'
        }
    }
}

//I listen to queue with messages, and charge the customer credit card once a message arrives
class ChargeTopicSubscriber {
    start() {
        const messageQueue = new MessageQueueConnector();
        console.log('Starting the charging subscriber, about to listen to MQ topic');
        messageQueue.subscribe("charge-queue", (message) => {//typical MQ interface
            console.log('Charge credit card message has arrived ${message}');
            const businessLogicResult = new chargeService().charge(message);
            new MailerService().sendMail(message.email, "You were charged", "Body with text");
        })
    }
}

module.exports.ChargeSubscriber = ChargeTopicSubscriber;
module.exports.MessageQueue = MessageQueueConnector;
module.exports.Mailer = MailerService;