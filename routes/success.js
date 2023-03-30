const successController = require('../controllers/success')

const express = require('express');

const router = express.Router();

router.get('/success', successController.getSuccessPage);

module.exports = router;