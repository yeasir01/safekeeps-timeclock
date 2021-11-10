const { Schema, model } = require('mongoose');
const { hashPassword } = require('../middleware/hash-password');

const CompanySchema = new Schema({
    app_metadata: {
        type: Object,
        required: false,
    },
    blocked: {
        type: Boolean,
        required: true,
        default: false
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
    reset_token: {
        type: String,
        required: false
    }
}, {
    timestamps: true,
    strict: true
});

CompanySchema.pre('save', hashPassword);
module.exports = model('Company', CompanySchema);