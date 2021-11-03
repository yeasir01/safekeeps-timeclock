const express = require('express');
const router = express.Router();
const employeeController = require('../../controllers/employee-controller');
const validate = require('../../middleware/schema-validator');
const { createEmployeeSchema } = require('../../validation/employee-schema');

router.route('/employee/create/:_id')
    // @route  POST api/v1/employee/create
    // @desc   POST employee info in req.body
    // @access Private
    .post(validate(createEmployeeSchema), employeeController.createOne);

router.route('/employee/update/:_id')
    // @route  PUT api/v1/employee/update
    // @desc   PUT employee info in req.body
    // @access Private
    .put(employeeController.updateOne);

router.route('/employee/delete/:_id')
    // @route  PUT api/v1/employee/update
    // @desc   PUT employee info in req.body
    // @access Private
    .delete(employeeController.deleteOne);

router.route('/employee/get-one/:_id')
    // @route  PUT api/v1/employee/update
    // @desc   PUT employee info in req.body
    // @access Private
    .get(employeeController.getOne);

module.exports = router;