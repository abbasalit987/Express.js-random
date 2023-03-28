const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// });

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<form action="/product" method="POST"><label>Product</label><br><input type="text" name="title"><br><label>Size</label><br><input type="text" name="size"><br><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
//   console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(4000);
