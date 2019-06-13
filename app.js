const express = require('express');
let app = express();
const db = require('./db');
var middleware = require('./middleware');

let addressController = require('./address/AddressController');
// validating user token for every request
app.use(middleware.checkToken);
app.use('/api', addressController);

module.exports = app;