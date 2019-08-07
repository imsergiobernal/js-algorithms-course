const stringSearch = require('./x-stringSearch');

const longString = "Tres tristes tigres comen trigo en un trigal";

describe('string search', () => {
    it('should count how many matches are in a string', () => {
        expect(stringSearch(longString, 'palomas')).toBe(-1);
        expect(stringSearch(longString, 'Tres')).toBe(1);
        expect(stringSearch(longString, 'tigres')).toBe(1);
        expect(stringSearch(longString, 'en tri')).toBe(1);
        expect(stringSearch(longString, 'un')).toBe(1);
        expect(stringSearch(longString, 'es')).toBe(3);
        expect(stringSearch(longString, 'trigal')).toBe(1);
    })
})