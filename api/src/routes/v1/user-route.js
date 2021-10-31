const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user-controller');
const validate = require('../../middleware/schema-validator');
const { forgotSchema, registerationSchema, loginSchema } = require('../../validation/user-schema');

router.route('/user/register')
    // @route  POST api/v1/user/register
    // @desc   POST user registration info in req.body
    // @access Public
    .post(validate(registerationSchema), userController.register);

router.route('/user/login')
    // @route  POST api/v1/user/login
    // @desc   POST a proper email & password to recieve auth tokens
    // @access Public
    .post(validate(loginSchema), userController.login);

router.route('/user/forgot')
    // @route  POST api/v1/user/forgot
    // @desc   POST a proper email to recieve a one time token to email
    // @access Public
    .post(validate(forgotSchema), userController.forgot);

module.exports = router;