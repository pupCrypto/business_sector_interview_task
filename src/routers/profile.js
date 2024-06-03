const express = require('express');
const controllers = require('../controllers/profile');
const {
    editProfileSchema,
    getProfileSchema,
    getProfilesSchema
} = require('../schemas/req');
const router = express.Router();

router.put('/profiles/:userId', editProfileSchema, controllers.editProfile);
router.get('/profiles/:userId', getProfileSchema, controllers.getProfile);
router.get('/profiles', getProfilesSchema, controllers.getProfiles);

module.exports = router;
