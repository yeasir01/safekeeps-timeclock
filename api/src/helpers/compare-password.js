const bcrypt = require('bcryptjs');

/**
 * Asynchronously compare a plain text password to a hashed password.
 * @param {param} password Plain text password, usually found in the req.body. 
 * @param {param} hash  Hashed version of password, usually stored in DB.
 */
module.exports.comparePassword = (password, hash) => new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, isMatch) => {
        if (typeof err === 'boolean') return resolve(err);
        if (err instanceof Error) return reject(err);
        return resolve(isMatch);
    });
});