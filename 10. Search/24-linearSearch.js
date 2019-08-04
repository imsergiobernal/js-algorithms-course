/**
 * O(n)
 * Write a function called linearSearch which acceps an array and a value, and returns the index
 * at which the value exists. If the value does not exist in the array, return -1.
 * @param {any[]} values
 * @param {number} value
 * @return {number}
 */
function linearSearch(values, value) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] === value) return i;
    }

    return -1;
}

linearSearch([32,54,21,4,233,4,64,23], 64); // 6