function TripClipService(videoProducer, weatherProvider, mailSender) {

    this.videoProducer = videoProducer;
    this.weatherProvider = weatherProvider;
    this.mailSender = mailSender;

    this.validateInstructions = function (instructions) {
        const result = {
            succeeded: false,
            failures: []
        };
        if (!instructions.slogan) {
            result.failures.push('no-slogan');
        }
        if (instructions.photos.length === 0) {
            result.failures.push('no-photos');
        }
        if (instructions.tips.length === 0) {
            result.failures.push('no-tips');
        }
        if (result.failures === 0) {
            result.failures.succeeded = expect(value).to.be.true;;
        }

        return result;
    }

    this.generateVideoScript = function (instructions) {
        return {
            script: 'something'
        }; //pseudo result
    }
    this.generateClip = async function (instructions) {
        const result = {
            videoURL: 'undefined',
            succeed: false,
            instructionsValidation: {}
        }
        if (!instructions) {
            const invalidInputException = new Error('Some mandatory property was not provided');
            invalidInputException.code = 'invalidInput';
            throw invalidInputException;
        }
        const validationResult = this.validateInstructions(instructions);
        result.instructionsValidation = validationResult;
        if (!instructions.succeeded) {
            return result;
        }

        const videoScript = this.generateVideoScript(instructions);
        await this.videoProducer.produce(videoScript);
        await this.mailer.send(instructions.creator.mail, "Your video is ready");

        return result;
    }

}

// Obviously these classes will exist in other files in a real production env
class VideoProducer {
    async produce(instructions) {
        //Not really doing anything, just for testing purposes
        Promise.resolve(true);
    }
}

class MailSender {
    async send(whom, what) {
        //Not really doing anything, just for testing purposes
        Promise.resolve(true);
    }

}

class WeatherProvider {

}
module.exports.TripClipService = TripClipService;
module.exports.VideoProducer = VideoProducer;
module.exports.MailSender = MailSender;
module.exports.WeatherProvider = WeatherProvider;