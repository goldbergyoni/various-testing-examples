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


class SensorsTopicSubscriber {
    start() {
        const messageQueue = new MessageQueueConnector();
        console.log('Starting the charging subscriber, about to listen to MQ topic');
        messageQueue.subscribe("sensors-queue", (message) => { //typical MQ interface
            new MailerService().sendMail("admin@system.io", "High temperature!", "Body with text");
        })
    }
}

module.exports.sensorsTopicSubscriber = SensorsTopicSubscriber;
module.exports.mailService = mailService;
module.exports.messageQueueConnector = messageQueueConnector