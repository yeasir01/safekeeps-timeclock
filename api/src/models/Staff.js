const {Schema, model} = require('mongoose');

const StaffSchema = new Schema({
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
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
    last_login: {
        type: Date,
        required: false,
    }
}, {
    timestamps: true,
    strict: true
});

module.exports = model('Staff', StaffSchema);