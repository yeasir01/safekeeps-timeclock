const express = require('express');
const router = express.Router();
const healthCheck = require('../controllers/health-controllers.js');

router.route('/server-health')
    .get(healthCheck.server);

router.route('/db-health')
    .get(healthCheck.database);

module.exports = router;