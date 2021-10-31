const bcrypt = require('bcryptjs');

module.exports.comparePassword = (password, hash) => new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, isMatch) => {
        if (err) return reject(err);
        return resolve(isMatch);
    });
});