const { Schema, model } = require('mongoose');
const { hashPassword } = require('../middleware/hash-password');

const AccountSchema = new Schema({
    app_metadata: {
        type: Object,
        required: false,
    },
    blocked: {
        type: Boolean,
        required: true,
        default: false,
        select: false,
    },
    company_name: {
        type: String,
        required: true,
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
        select: false,
    },
    identities: {
        type: Array,
        required: false,
        select: false,
    },
    last_ip: {
        type: String,
        required: false,
        select: false,
    },
    last_login: {
        type: Date,
        required: false,
        select: false,
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
        select: false,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    reset_token: {
        type: String,
        required: false,
        select: false,
    }
}, {
    timestamps: true,
    strict: true
});

AccountSchema.pre('save', hashPassword);
module.exports = model('Account', AccountSchema);