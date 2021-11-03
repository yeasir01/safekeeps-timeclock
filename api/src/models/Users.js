const {Schema, model} = require('mongoose');
const { hashPassword } = require('../middleware/password-hash');

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

const UserSchema = new Schema({
    app_metadata: {
        type: Object,
        required: false,
    },
    blocked: {
        type: Boolean,
        required: true,
        default: false
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true,
        }
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true,
    },
    user_metadata: {
        type: Object,
        required: false,
    },
    identities: {
        type: Array,
        required: false
    },
    last_ip: {
        type: String,
        required: false
    },
    last_login: {
        type: Date,
        required: false
    },
    phone_number: {
        type: String,
        required: false
    },
    picture: {
        type: String,
        required: false
    },
    email_verified: {
        type: Boolean,
        default: false,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    employees: [EmployeeSchema],
    reset_token: {
        type: String,
        required: false
    }
}, {
    timestamps: true,
    strict: true
});

UserSchema.pre('save', hashPassword);
module.exports = model('User', UserSchema);