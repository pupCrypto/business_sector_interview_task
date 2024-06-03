const jwtUtils = require('../utils/jwt');

class Auth {
    static genAccessToken(userId) {
        return jwtUtils.genJwtToken({userId: userId});
    }
}

module.exports = Auth;
