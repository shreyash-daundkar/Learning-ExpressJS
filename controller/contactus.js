const path = require('path');
const rootDir = require('../util/path');

exports.success = (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'contactus-success.html'));
}

exports.contactUsPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
}