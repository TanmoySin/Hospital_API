const express = require('express');
const router = express.Router();
const createReport = require('../controller/report');
router.post('/:id/create_report' ,createReport.createReport);
router.get('/:id/all_report' ,createReport.allReport);
router.get('/:status' , createReport.status);
module.exports = router;