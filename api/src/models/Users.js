const mongoose = require('mongoose');
const { hashPassword } = require('../middleware/password-hash');

var UserSchema = mongoose.Schema({
    app_metadata: {
        type: Object,
        require: false,
    },
    blocked: {
        type: Boolean,
        require: true,
        default: false
    },
    email: {
        type: String,
        require: true,
        index: {
            unique: true,
        }
    },
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        required: true,
    },
    user_metadata: {
        type: Object,
        require: false,
    },
    identities: {
        type: Array,
        require: false
    },
    last_ip: {
        type: String,
        require: false
    },
    last_login: {
        type: Date,
        require: false
    },
    phone_number: {
        type: String,
        require: false
    },
    picture: {
        type: String,
        require: false
    },
    email_verified: {
        type: Boolean,
        default: false,
        require: true,
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    reset_token: {
        type: String,
        require: false,
        default: null
    }
}, {
    timestamps: true
});

UserSchema.pre('save', hashPassword);
module.exports = mongoose.model('User', UserSchema);