const shopController = require('../controllers/shop');

const express = require('express');

const router = express.Router();

//get Shop 
router.get('/', shopController.getShop);

module.exports = router;
