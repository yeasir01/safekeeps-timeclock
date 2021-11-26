const bcrypt = require('bcryptjs');

/**
 * Asynchronously compare a plain text password to a salt/hashed verison.
 * @param {string} password supply a plain text password to compare. Usually found in the req.body.
 * @param {string} hash supply a hashed password, usually stored in db.
 */
module.exports.comparePassword = (password, hash) => new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, isMatch) => {
        if (err) {return reject(err);}
        if (isMatch) {return resolve(true);}
        return resolve(false);
    });
});