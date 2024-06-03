const hashPassword = require('../utils/sha');
const User = require('../models/user');

class UserAlreadyExistsError extends Error {}

class UserService {
    static async checkUserExist(email) {
        return false;
    }

    static async registerUser(firstName, email, password) {
        let userExists = await this.checkUserExist(email);
        if (userExists) {
            throw new UserAlreadyExistsError();
        }
        let hashedPassword = hashPassword(password);
        let user = User.build({});
        await user.save();
    }
}

module.exports = {
    UserAlreadyExistsError,
    UserService,
};