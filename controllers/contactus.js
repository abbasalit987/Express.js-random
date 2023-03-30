const path = require('path');

exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'));
};