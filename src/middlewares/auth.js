const Auth = require('../services/auth');

async function authMiddleware(req, res, next) {
    req.auth = new Auth(req.headers.authorization);
    await req.auth.authenticate();
    next();
}

module.exports = authMiddleware;
