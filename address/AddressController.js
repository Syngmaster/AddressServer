let errorHandler = require('../errorhandler');

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
let uuid = require('uuid');

let Address = require('../address/Address');

/*
    -------------------------------------
    API Endpoint for adding a new address
    -------------------------------------
*/

router.post('/address', function (req, res) {

    let userUUID = req.headers['UserId'];

    Address.create({
            uuid: uuid.v1(),
            phone: req.body.phone,
            street: req.body.street,
            city: req.body.city,
            country: req.body.country,
            userUUID: userUUID
        },
        function (err, item) {
            if (err) return errorHandler.addressNotCreated(res);
            res.status(200).send(item);
        });

});

/*
    -------------------------------------------
    API Endpoint for getting all user addresses
    -------------------------------------------
*/


router.get('/address', function (req, res) {
    let userUUID = req.headers['UserId'];

    Address.find({userUUID: userUUID}, function (error, addresses) {
        if (error) return errorHandler.serverError(res);
        res.status(200).send(addresses);
    })

});

/*
    -----------------------------------
    API Endpoint for editing an address
    -----------------------------------
*/


router.put('/address/:uuid', function (req, res) {
    let userUUID = req.headers['UserId'];

    let addressUUID = req.params.uuid.toString();
    Address.findOne({uuid: userUUID}, function (error, address) {
        if (error) return errorHandler.serverError(res);
        if (!address) return errorHandler.addressDoesNotExist(res);

        // TO DO:
        //
        // address.phone = phone;
        // address.save(function (error) {
        //     if (error) return errorHandler.updatingError(res);
        //     res.status(200).send(address);
        // });
    })

});

/*
    -----------------------------------
    API Endpoint for deleting an address
    -----------------------------------
*/


router.delete('/address/:uuid', function (req, res) {
    let userUUID = req.headers['UserId'];
    let addressUUID = req.params.uuid.toString();

    Address.findOneAndDelete({uuid: addressUUID, userUUID: userUUID}, function (error) {
        if (error) return errorHandler.deletingError(res);
        res.status(200).send({message: "Deleted successfully"});

    });

});


module.exports = router;