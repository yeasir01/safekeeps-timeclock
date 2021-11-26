const { serializeUrlToken } = require('./url-token');

describe('Serialize Token Function', () => {
    
    it('should return a string token', async () => {
        const token = await serializeUrlToken();
        expect(typeof token).toBe('string');
    });
    
    it('should contain a date', async () => {
        const token = await serializeUrlToken();
        const date = token.split('.')[1];
        expect(date).toBeTruthy();
    });

    it('should contain an 80 char string with no params passed', async () => {
        const token = await serializeUrlToken();
        const tknLength = token.split('.')[0].length;
        expect(tknLength).toBe(80);
    });

    it('should throw a TypeError if a string is passed', async () => {
        try {
            await serializeUrlToken('test');
        } catch (err) {
            expect(err).toThrow(TypeError);
        }
    });
});