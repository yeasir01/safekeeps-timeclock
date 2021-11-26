const crypto = require('crypto');

/**
 * Asynchronously generates a cryptographically strong url token.
 * @param {number} expiry Pass TTL value in seconds. If no value is passed, the expiry will default to 3600s. 
 * @param {number} size  The number of bytes to generate. The size must not be larger than 2**31 - 1..
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
 * This function will compare both tokens passed for an exact match. Then check the TTL against the 
 * Date.now() method.
 * 
 * If both checks pass the function will return 'true'. 
 * 
 * If the tokens do not match or, the token is expired 'false' will be returned.
 * @param {string} serializedToken Usually found in the request object. 
 * @param {string} token  Usually stored in DB.
 */
module.exports.isUrlToken = (serializedToken = '', token = '') => {
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