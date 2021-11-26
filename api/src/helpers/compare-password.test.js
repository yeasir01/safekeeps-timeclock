const { comparePassword } = require('./compare-password');
const bcrypt = require('bcryptjs');

const genHash = (password) => new Promise((resolve, reject)=>{
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {reject(err);}

        bcrypt.hash(password, salt, function (err, hash) {
            if (err) {reject(err);}
            resolve(hash);
        });
    });
});

describe('Compare Password Function', () => {

    it('should fail password comparison when matching exact strings', async () => {
        const password = '1strongPassword$';
        const isMatch = await comparePassword(password, password);
        expect(isMatch).toBeFalsy();
    });

    it('should pass when matching to a hash', async () => {
        const password = '1strongPassword$';
        const hash = await genHash(password);
        const isMatch = await comparePassword(password, hash);
        expect(isMatch).toBeTruthy();
    });

    it('should throw an error when illegal args are passed 1', async () => {
        try {
            await comparePassword(null, null);
        } catch (err) {
            expect(err.message).toEqual('Illegal arguments: object, object');
        }
    });

});