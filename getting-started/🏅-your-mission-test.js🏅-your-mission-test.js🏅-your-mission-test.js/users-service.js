let allUsers = [];

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
            validationResult.reasons.push('no-name');
        }

        if (!userToValidate.address && !userToValidate.zipCode) {
            validationResult.reasons.push('no-location');
        }

        if (validationResult.reasons.length === 0) {
            validationResult.succeeded = true;
        }

        return validationResult;
    }

    this.addNewUser = async function (newUser) {
        return new Promise((resolve, reject) => {
            if (!this.validateUser(newUser).succeeded) {
                throw new Error('User is not valid');
            }
            allUsers.push(newUser);
            resolve(true);
        });
    }

    this.deleteUser = function (name, callback) {
        const updatedUsersList = allUsers.filter((aUserToCheck) => aUserToCheck.name !== name);
        allUsers = updatedUsersList;

        callback(null, {
            succeed: true
        });
    }
}
module.exports = UserService;