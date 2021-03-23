const { Product } = require("../models/product.model");

module.exports.create = (request, response) => {
    Product.create(request.body)
        .then((product) => {
            response.json(product)
        })
        .catch((err) => {
            response.json(err)
        })
}

module.exports.delete = (request, response) => {
    Product.findByIdAndDelete(request.params.id)
        .then((product) => {
            response.json(product)
        })
        .catch((err) => {
            response.json(err)
        })
}

module.exports.update = (request, response) => {
    Product.findByIdAndUpdate(request.params.id)
        .then((product) => {
            response.json(product)
        })
        .catch((err) => {
            response.json(err)
        })
}

module.exports.getOne = (request, response) => {
    console.log("getOne method executed");

    Product.findById(request.params.id)
        .then((product) => {
            response.json(product);
        })
        .catch((err) => {
            response.json(err);
        });
}

module.exports.getAll = (request, response) => {
    console.log("getAll method executed");

    Product.find()
        .then((product) => {
            response.json(product);
        })
        .catch((err) => {
            response.json(err);
        });
}