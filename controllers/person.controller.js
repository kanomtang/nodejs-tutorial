const Person = require('../models/person.model');

exports.create = function (req, res) {
    let product = new Product({
        name: req.body.name,
        age: req.body.age
    });

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Produc Created Successfully');
    })
}
