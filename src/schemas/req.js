const { checkSchema } = require('express-validator');
const { getEnumValues } = require('../utils/general');
const { GENDER } = require('../consts');

const registerUserSchema = checkSchema({
    email: { isEmail: true, notEmpty: true },
    firstName: { isLength: { options: {max: 32 } }, optional: true },
    password: { isLength: { options: { min: 8 } }, notEmpty: true },
});

const loginUserSchema = checkSchema({
    email: { isEmail: true },
    password: { isLength: { options: { min: 8 } } },
});

const editProfileSchema = checkSchema({
    email: { isEmail: true, optional: true },
    firstName: { isLength: { options: {max: 32 } }, optional: true },
    lastName: { isLength: { options: {max: 32 } }, optional: true },
    gender: { isIn: { options: [ ...getEnumValues(GENDER) ] }},
    photo: { optional: true }
});
const getProfileSchema = checkSchema({
    userId: { isInt: true }
});
const getProfilesSchema = checkSchema({
    page: { isInt: true }
});

module.exports = {
    registerUserSchema,
    loginUserSchema,
    editProfileSchema,
    getProfileSchema,
    getProfilesSchema,
};