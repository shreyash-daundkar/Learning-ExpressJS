const express = require('express');
const path = require('path');
const rootDir = require('../util/path')

const router = express.Router();

router.post('/success', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'contactus-success.html'));
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

module.exports = router;