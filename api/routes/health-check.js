const express = require('express');
const router = express.Router();
const { sequelize } = require('../models/index.js');

router.route('/healthy')
    .get(async function (_req, res) {
        try {
            await sequelize.authenticate();
            res.status(200).send('');
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    });

module.exports = router;