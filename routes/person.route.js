const express = require('express');
const router = express.Router();

const person_controller = require('../controllers/person.controller');

router.post('/', person_controller.create);

router.get('/:id', person_controller.read);

router.put('/:id', person_controller.update);

router.delete('/:id', person_controller.delete);

module.exports = router;
