const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    //console.log('In another middleware!');
    res.send('<form action="/admin/add-product" method="POST"><label>Product</label><br><input type="text" name="title"><br><label>Size</label><br><input type="text" name="size"><br><button type="submit">Add Product</button></form>');
  });
  
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });

module.exports = router;