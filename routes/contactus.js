const contactUsController = require('../controllers/contactus');

const express = require('express');

const router = express.Router();

router.get('/contactus', contactUsController.getContactUs);

module.exports = router;
