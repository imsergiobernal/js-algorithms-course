const selectionSort = require('./x-selectionSort');

const { sortedArray, unsortedArray } = require('../11. Bubble sort/array');

describe('selectionShort', () => {
    it('should short the array', () => {
        expect(selectionSort(unsortedArray)).toStrictEqual(sortedArray);
    });
});