const express = require('express');
const controllers = require('../controllers/profile');
const strictValidator = require('../middlewares/scrictValidator');
const authMiddleware = require('../middlewares/auth');


const {
    editProfileSchema,
    getProfileSchema,
    getProfilesSchema
} = require('../schemas/req');
const router = express.Router();

router.put('/profiles/:userId', editProfileSchema, strictValidator, authMiddleware, controllers.editProfile);
router.get('/profiles/:userId', getProfileSchema, strictValidator, controllers.getProfile);
router.get('/profiles', getProfilesSchema, controllers.getProfiles);

module.exports = router;
