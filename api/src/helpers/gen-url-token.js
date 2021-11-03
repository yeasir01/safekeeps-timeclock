const crypto = require('crypto');

/**
 * Asynchronously generates cryptographically strong url token.
 * @param {param} expiry Pass TTL value in seconds. If no value is passed, the expiry will default to 3600s. 
 * @param {param} size  The number of bytes to generate. The size must not be larger than 2**31 - 1..
 * If no value is passed, the size will default to 40.
 */
module.exports.serializeUrlToken = (expiry = 3600, size = 40) => new Promise((resolve, reject) => {
    crypto.randomBytes(size, (err, buf) => {
        if (err) return reject(err);

        const now = Date.now();
        const ttl = now + (expiry * 1000);
        const urlSafeToken = buf.toString('hex').replace(/\//g,'_').replace(/\+/g,'-');

        return resolve(urlSafeToken + '.' + ttl);
    });
});

/**
 * Asynchronously compare a serialized url token to a given token. The function will compare both tokens 
 * & expiry dates against Date.now() & return a Boolean.
 * 
 * If both checks pass the function will return 'TRUE' otherwise, 'FALSE' will be returned.
 * @param {param} serializedToken Pass token, usually found in the req.body. 
 * @param {param} token  Pass token, usually stored in DB.
 */
module.exports.deSerializeUrlToken = (serializedToken = '', token = '') => {
    const now = Date.now();
    const arry = serializedToken.split('.');
    const isMatch = arry[0] === token;
    const isNotExpired = arry[1] > now;

    if (isMatch && isNotExpired) {
        return true;
    } else {
        return false;
    }
};