const shortedArrayGenerator = require('./shortedArrayGenerator').shortedArrayGenerator;

/**
 * Counts how many unique numbers are placed in a given shorted array.
 * @example
 *  --------------| counter '5'
 *  [-2,-1,-1,0,1,2,2,3] // Output: 6 (counter + 1)
 *  ------------------| pointer '7'
 * @param {number[]} arr Shorted array of numbers
 * @returns {number} Unique numbers amount
 */
const uniqueValuesCounter = (arr) => {
    if (!arr | !arr.length) return 0;

    let counter = 0;
    let pointer = 1;
    while (pointer < arr.length) {
        if (arr[counter] !== arr[pointer]) {
            counter++;
            arr[counter] = arr[pointer];
        }
        pointer++;
    }
    return counter + 1;
}

const array = shortedArrayGenerator(50);
console.log(uniqueValuesCounter(array));
