const express = require('express');
const router = express.Router();
const doctor = require('../controller/doctor');
router.get('/', doctor.home);
router.use('/doctor', require('./doctor'));
router.use('/patients', require('./patient'));
router.use('/patients', require('./report'));
router.use('/reports', require('./report'));
module.exports = router;
