const express = require('express');
const contactUsController = require('../controller/contactus');

const router = express.Router();

router.post('/success', contactUsController.success);
router.get('/', contactUsController.contactUsPage);

module.exports = router;