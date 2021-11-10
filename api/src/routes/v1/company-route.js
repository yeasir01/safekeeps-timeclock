const express = require('express');
const router = express.Router();
const passport = require('passport');
const companyController = require('../../controllers/company-controller');
const validate = require('../../middleware/schema-validator');
const { forgotSchema, registerationSchema, loginSchema } = require('../../validators/user-schema');
const { isAuth } = require('../../middleware/auth-check');

router.route('/user/register')
    // @route  POST api/v1/user/register
    // @desc   POST user registration info in req.body
    // @access Public
    .post(validate(registerationSchema), companyController.register);

router.route('/user/login')
    // @route  POST api/v1/user/login
    // @desc   POST a proper email & password to recieve auth tokens
    // @access Public
    .post(validate(loginSchema), passport.authenticate('local'), companyController.login);

router.route('/user/logout')
    // @route  GET api/v1/user/logout
    // @desc   GET logout the current user.
    // @access Private
    .get(companyController.logout);

router.route('/user/profile')
    // @route  PUT api/v1/user/profile
    // @desc   PUT update users profile
    // @access Private
    .put(isAuth, companyController.editProfile)
    // @route  GET api/v1/user/profile
    // @desc   GET update users profile
    // @access Private
    .get(isAuth, companyController.getProfile);

router.route('/user/forgot')
    // @route  POST api/v1/user/forgot
    // @desc   POST a proper email to recieve a one time token to email
    // @access Public
    .post(validate(forgotSchema), companyController.forgot);

module.exports = router;