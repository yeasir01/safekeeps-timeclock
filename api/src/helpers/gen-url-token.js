const crypto = require('crypto');

module.exports.serializeUrlToken = (size = 38, expiry = 1000) => new Promise((resolve, reject) => {
    crypto.randomBytes(size, (err, buf) => {
        if (err) return reject(err);

        const now = Date.now();
        const ttl = now + (expiry * 1000);
        const urlToken = buf.toString('hex').replace(/\//g,'_').replace(/\+/g,'-');

        return resolve(urlToken + '.' + ttl);
    });
});

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