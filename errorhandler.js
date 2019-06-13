let addressNotCreated = function (res) {
    res.status(404);
    res.status({
        code: 404,
        message: "There was a problem creating the address."
    });
};

let serverError = function (res) {
    res.status(500);
    res.send({
        code: 500,
        message:'Server error'
    });
};

let addressDoesNotExist = function (res) {
    res.status(400);
    res.send({
        code: 400,
        message: 'Address does not exist'
    });
};

let updatingError = function (res) {
    res.status(500);
    res.send({
        code: 500,
        message: "Couldn't save address"
    });
};

let deletingError = function (res) {
    res.status(500);
    res.send({
        code: 500,
        message: "Couldn't delete address"
    });
};


module.exports = {
    addressNotCreated,
    serverError,
    addressDoesNotExist,
    updatingError,
    deletingError

};
