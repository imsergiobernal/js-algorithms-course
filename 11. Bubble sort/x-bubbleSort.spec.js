const bubbleSort = require('./x-bubbleSort');

const { sortedArray, unsortedArray } = require('./array');

describe('bubbleShort function', () => {
    it('must short the numbers of the array', () => {
        expect(bubbleSort(unsortedArray)).toStrictEqual(sortedArray);
    });
});

module.exports = { unsortedArray, sortedArray };