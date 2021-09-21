const express = require('express');
const router = express.Router();
const test = require('../controllers/test-controllers.js');

router.route('/')
    .get(test.server);

router.route('/db')
    .get(test.database);
    
module.exports = router;