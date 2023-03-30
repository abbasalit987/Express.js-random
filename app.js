const express = require('express');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const contactusRouter = require('./routes/contactus');
const successRouter = require('./routes/success');

const errorController = require('./controllers/error');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRouter);
app.use('/shop',shopRouter);
app.use(contactusRouter);
app.use(successRouter);

app.use(errorController.getErrorPage);

app.listen(4000);