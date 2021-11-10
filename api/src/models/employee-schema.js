const {Schema, model} = require('mongoose');

const EmployeeSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    pin: {
        type: String,
        required: true,
        default: '0000',
        select: false,
    },
    start_date: {
        type: Date,
        required: false,
    },
    end_date: {
        type: Date,
        required: false,
    },
    employee_id: {
        type: String,
        required: false
    },
    pay_rate: {
        type: Object,
        required: false
    },
    group_id: {
        type: Object,
        required: false
    },
});

module.exports = model('Employee', EmployeeSchema);