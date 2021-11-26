const express = require('express');
const router = express.Router();
const passport = require('passport');
const accountController = require('../../controllers/account-controller');
const validate = require('../../middleware/schema-validator');
const isAuthorized = require('../../middleware/auth-check').isAuth;
const { forgotSchema, registerationSchema, loginSchema } = require('../../validators/account-schema');

router.route('/user/register')
    // @route  POST api/v1/user/register
    // @desc   POST user registration info in req.body
    // @access Public
    .post(validate(registerationSchema), accountController.register);

router.route('/user/login')
    // @route  POST api/v1/user/login
    // @desc   POST a proper email & password to recieve auth tokens
    // @access Public
    .post(validate(loginSchema), passport.authenticate('local'), accountController.login);

router.route('/user/logout')
    // @route  GET api/v1/user/logout
    // @desc   GET logout the current user.
    // @access Private
    .get(accountController.logout);

router.route('/user/profile')
    // @route  GET api/v1/user/profile
    // @desc   GET update users profile
    // @access Private
    .get(isAuthorized, accountController.getProfile)
    // @route  PUT api/v1/user/profile
    // @desc   PUT update users profile
    // @access Private
    .put(isAuthorized, accountController.editProfile);

router.route('/user/forgot')
    // @route  POST api/v1/user/forgot
    // @desc   POST a proper email to recieve a one time token to email
    // @access Public
    .post(validate(forgotSchema), accountController.forgot);

module.exports = router;