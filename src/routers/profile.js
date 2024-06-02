const controllers = require('../controllers/profile');
const express = require('express');
const router = express.Router();

router.put('/profiles/:userId', controllers.editProfile);
router.get('/profiles/:userId', controllers.getProfile);
router.get('/profiles', controllers.getProfiles);

module.exports = router;
