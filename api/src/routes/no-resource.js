const express = require('express');
const router = express.Router();

router.route('/')
    .get(function (req, res) {
        res.status(404).json({success: false, message: 'No resource found', url: req.originalUrl});
    });

module.exports = router;