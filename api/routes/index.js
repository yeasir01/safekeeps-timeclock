const express = require('express');
const router = express.Router();
const test = require('../controllers/test-controllers.js');

router.route('/')
    .get(test.server);

router.route('/testdb')
    .get(test.database);

router.route('*')
    .get(test.noRoute);

module.exports = router;