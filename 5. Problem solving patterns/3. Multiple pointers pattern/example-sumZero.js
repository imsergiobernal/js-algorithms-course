/**
 * Find the first pair of numbers that sum equals zero, in a shorted array
 * @param {number[]} array Shorted array of numbers
 * @example
 * -----| left
 * [-6,-5,-3,-1, 0, 2, 3, 4, 5, 7] // [-5, 5]
 * --------------------------| right
 * @returns {number[] | false} [number, number]
 */
const sumZero = (array) => {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]];
        }
        if (sum < 0) {
            left++;
            continue;
        }
        right--;
    }
    return false;
}

console.log(sumZero([-6, -5, -3, -1, 0, 2, 3, 4, 5, 7])); // [-5, 5]
