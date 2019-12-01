const { unsortedArray, sortedArray } = require('../11. Bubble sort/array');
const { insertionSort } = require('./x-InsertionSort');

describe('InsertionSort', () => {
    it('should sort the array', () => {
        expect(insertionSort(unsortedArray)).toStrictEqual(sortedArray);
    })
})
