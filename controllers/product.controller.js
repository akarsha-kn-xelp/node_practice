const Product = require('../models/product.model');


//test
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
    let product = new Product('akarsh',1)
    product.save();
};

//create
exports.product_create = function (req, res) {
    let product = new Product(req.body.name,req.body.price)
    product.save(function () {
        res.send('Product Created successfully')
    })
};

//read
exports.product_details = function (req, res) {
    let product = new Product()
    product.findById(req.params.id, function ( resp) {
        res.send(resp);
    })
};

//update
exports.product_update = function (req, res) {
    let product = new Product()
    product.findByIdAndUpdate(req.params.id,  req.body, function () {
        res.send('Product udpated.');
    });
};

//delete
exports.product_delete = function (req, res) {
    let product = new Product()
    product.findByIdAndRemove(req.params.id, function () {
        res.send('Deleted successfully!');
    })
};
