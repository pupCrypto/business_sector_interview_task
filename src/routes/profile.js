const express = require('express');
const router = express.Router();

router.put('/profiles/{id}', (req, res) => {});
router.get('/profiles/{id}', (req, res) => {});
router.get('/profiles?page', (req, res) => {});

exports.module = router;
