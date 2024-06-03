const express = require('express');
const controllers = require('../controllers/user');
const strictValidator = require('../middlewares/scrictValidator');

const {
    registerUserSchema,
    loginUserSchema,
} = require('../schemas/req');
const router = express.Router();

router.post('/user/register', registerUserSchema, strictValidator, controllers.registerUser);
router.post('/user/login', loginUserSchema, strictValidator, controllers.loginUser);

module.exports = router;
