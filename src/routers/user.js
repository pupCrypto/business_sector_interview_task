const express = require('express');
const { body, validationResult } = require('express-validator');
const controllers = require('../controllers/user');
const {
    registerUserSchema,
    loginUserSchema,
} = require('../schemas/req');
const router = express.Router();

router.post('/user/register', registerUserSchema, body('req').notEmpty(), controllers.registerUser);
router.post('/user/login', loginUserSchema, controllers.loginUser);

module.exports = router;
