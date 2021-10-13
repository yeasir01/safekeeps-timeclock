const express = require('express');
const router = express.Router();

router.route('/')
    .get(function (_req, res) {
        res.status(404).json({success: false, message: 'No resource found'});
    });

module.exports = router;