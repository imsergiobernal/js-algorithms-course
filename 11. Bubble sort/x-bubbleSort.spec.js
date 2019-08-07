const bubbleSort = require('./x-bubbleSort');

const unsortedArray = [2,5,8,4,6,20,1,32,2,44,5,7,9,4,0];
const sortedArray = [0,1,2,2,4,4,5,5,6,7,8,9,20,32,44];

describe('bubbleShort function', () => {
    it('must short the numbers of the array', () => {
        expect(bubbleSort(unsortedArray)).toStrictEqual(sortedArray);
    });
})