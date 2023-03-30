const path = require('path');

exports.getSuccessPage = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'success.html'));
};