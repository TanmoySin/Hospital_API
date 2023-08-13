const express = require('express');
const router = express.Router();
const patient = require('../controller/patient');
router.post('/registers',patient.register);
module.exports = router;