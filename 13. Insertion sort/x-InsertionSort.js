/**
 * Insertion Sort algorithm. Left side will be always sorted, then there's only once
 * iteration to the right.
 * @param {number[]} array
 * @returns {number[]}
 */
exports.insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const currentValue = array[i];

        let j = i;

        /**
         * In order to simplify the process of insert a number in an
         * inner position, we will copy the left number to the left+1 position for each
         * left iteration.
         * @example
         * _ = 'j'
         * + = 'j + 1'
         *
         *   _
         * 2 5 4 3 5 3
         *   _ +
         * 2 5 5 3 5 3
         */
        for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
            array[j + 1] = array[j];
        }

        /**
         * And then place the currentValue in the proper sorted position. Just after a lower number.
         * @example
         * currentValue = 4;
         * _ = 'j'
         * + = 'j + 1'
         * 
         * _ +
         * 2 4 5 3 5 3
         */
        array[j + 1] = currentValue;
    }
    
    return array;
};
