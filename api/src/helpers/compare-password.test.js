const { comparePassword } = require('./compare-password');
const bcrypt = require('bcryptjs');

const genHash = (password) => new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
        if (err) { reject(err); }

        bcrypt.hash(password, salt, function (err, hash) {
            if (err) { reject(err); }
            resolve(hash);
        });
    });
});

describe('Compare Password Function', () => {

    const password = '1strongPassword$';

    it('should fail password comparison when matching exact strings', async () => {
        expect.assertions(1);
        const isMatch = await comparePassword(password, password);
        return expect(isMatch).toBeFalsy();
    });

    it('should pass when matching password to hash', async () => {
        expect.assertions(1);
        const hash = await genHash(password);
        const isMatch = await comparePassword(password, hash);
        return expect(isMatch).toBeTruthy();
    });

    it('should throw an error when illegal args are passed', async () => {
        expect.assertions(1);
        await expect(comparePassword(null, null)).rejects.toThrow();
    });

    it('should throw an error when no args passed', async () => {
        expect.assertions(1);
        await expect(comparePassword()).rejects.toThrow();
    });
});