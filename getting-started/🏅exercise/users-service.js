function UserService(config) {
    this.config = config;

    this.validateUser = function (userToValidate) {
        const validationResult = {
            succeeded: false,
            reasons: []
        };

        if (!userToValidate) {
            throw new Error('No user was provided');
        }

        if (!userToValidate.name || !userToValidate.familyName) {
            this.validationResult.reasons.push('no-name');
        }

        if (!userToValidate.address && !userToValidate.zipCode) {
            this.validationResult.reasons.push('no-location');
        }

        if (validationResult.reasons.length === 0) {
            validationResult.succeeded = true;
        }

        return validationResult;
    }

    this.addNewUser = function (newUser) {

    }
}
module.exports.UserService = UserService;