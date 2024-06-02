const controllers = require('../controllers/user');
const express = require('express');
const router = express.Router();

router.post('/user/register', controllers.registerUser);
router.post('/user/login', controllers.loginUser);

module.exports = router;
