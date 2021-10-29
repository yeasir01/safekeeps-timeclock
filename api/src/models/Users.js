const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    }
}, {
    timestamps: true
});

UserSchema.pre('save', function(next) {
    var user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});
     
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);