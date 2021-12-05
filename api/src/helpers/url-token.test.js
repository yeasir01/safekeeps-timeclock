const { serializedUrlToken } = require('./url-token');

describe('Serialize Token Function', () => {
    
    it('should return a string token', async () => {
        expect.assertions(1);
        const token = await serializedUrlToken();
        return expect(typeof(token)).toBe('string');
    });
    
    it('should contain a date', async () => {
        expect.assertions(1);
        const token = await serializedUrlToken();
        const date = token.split('.')[1];
        return expect(date).toBeTruthy();
    });

    it('should contain an 80 char string with no params passed', async () => {
        expect.assertions(1);
        const token = await serializedUrlToken();
        const tokenLength = token.split('.')[0].length;
        return expect(tokenLength).toBe(80);
    });

    it('should throw a TypeError if a string is passed', async () => {
        expect.assertions(1);
        await expect(serializedUrlToken('bad', 'string')).rejects.toThrow(TypeError);
    });
});