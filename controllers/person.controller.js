const Person = require('../models/person.model');

exports.create = function (req, res) {
    let person = new Person({
        name: req.body.name,
        age: req.body.age
    });

    person.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Person Created Successfully');
    })
}

exports.read = function (req, res) {
    Person.findById(req.params.id, function (err, person) {

        res.send(person);
    })
}

exports.update = function (req, res) {
    Person.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, person) {
        res.send('Person updated.');
    });
}

exports.delete = function (req, res) {
    Person.findByIdAndRemove(req.params.id, function (err, person) {
        res.send('Delete person succcessfully')
    })
}