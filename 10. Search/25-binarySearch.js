/**
 * Worst case: O(log n)
 * Normal case: O(log n)
 * Best case: O(1)
 * Write a function called binarySearch which acceps a sorted array and a value and returns
 * the index at which the value exists. Otherwise, return -1.
 * @param {number[]} array Shorted array of numbers
 * @param {number} value 
 */
function binarySearch(array, value) {
    if (array.length === 0) return -1;

    const pointer = {
        left: 0,
        middle: null,
        right: array.length - 1
    }

    pointer.middle = Math.floor((pointer.left + pointer.right) / 2);

    while (pointer.left <= pointer.right) {
        pointer.middle = Math.floor((pointer.left + pointer.right) / 2);
        if (array[pointer.middle] === value) return pointer.middle; 
        if (array[pointer.middle] > value) {
            pointer.right = pointer.middle !== pointer.right ? pointer.middle : pointer.middle - 1;
        } else {
            pointer.left = pointer.middle !== pointer.left ? pointer.middle : pointer.middle + 1;
        }
    }

    return -1;
}

module.exports = binarySearch;