const path = require('path');

exports.getErrorPage = (req, res, next) => {
    res.status(404).send('<h1>Error 404 : Page Not Found</h1>');
};