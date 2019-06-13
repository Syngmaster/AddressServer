var mongoose = require('mongoose');
var AddressSchema = new mongoose.Schema({
    phone: String,
    street: String,
    city: String,
    country: String,
    uuid: String,
    userUUID: String
});
mongoose.model('Address', AddressSchema);

module.exports = mongoose.model('Address');
