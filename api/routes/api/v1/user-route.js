const express = require('express');
const router = express.Router();
const user = require('../../../controllers/user-controllers.js');

router.route('/user')
    .post(user.create);

router.route('/user/:id')
    .get(user.get)
    .delete(user.delete)
    .put(user.update);

module.exports = router;