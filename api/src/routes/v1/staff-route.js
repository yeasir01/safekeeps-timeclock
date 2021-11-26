const express = require('express');
const router = express.Router();
const staffController = require('../../controllers/staff-controller');
//const validate = require('../../middleware/schema-validator');
//const { newEmployeeSchema } = require('../../validators/employee-schema');
const isAuthorized = require('../../middleware/auth-check').isAuthorized;

router.route('/employee/create')
    // @route  POST api/v1/employee/create
    // @desc   POST employee info in req.body
    // @access Private
    .post(isAuthorized, staffController.createOne);

router.route('/employee/update/:_id')
    // @route  PUT api/v1/employee/update
    // @desc   PUT employee info in req.body
    // @access Private
    .put(isAuthorized, staffController.updateOne);

router.route('/employee/delete/:_id')
    // @route  PUT api/v1/employee/update
    // @desc   PUT employee info in req.body
    // @access Private
    .delete(isAuthorized, staffController.deleteOne);

router.route('/employee/get-one/:_id')
    // @route  PUT api/v1/employee/update
    // @desc   PUT employee info in req.body
    // @access Private
    .get(isAuthorized, staffController.getOne);

module.exports = router;