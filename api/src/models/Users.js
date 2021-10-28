const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        select: false
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);