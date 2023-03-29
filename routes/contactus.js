const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;