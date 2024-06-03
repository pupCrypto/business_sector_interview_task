const UserService = require('../services/user');

async function registerUser(req, res) {
    res.json(req.body);
}
async function loginUser(req, res) {}

module.exports = {
    registerUser,
    loginUser,
};
 