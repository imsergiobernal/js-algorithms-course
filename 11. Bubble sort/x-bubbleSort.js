/**
 * Bubble Sort algorithm implementation.
 * Push the highest number to the end. Then, asume that you have to iterate once less.
 * @param {number[]} array 
 */
function bubbleSort(array) {
    let result = Array.from(array);
    let hasSwap = false;

    for (let iteration = result.length - 1; iteration >= 0; iteration--) {
        hasSwap = false;

        for (let i = 0; i < iteration; i++) {
            const [first, second] = [result[i], result[i + 1]];

            if (first > second) {
                const [higher, lower] = [first, second]; 
                result[i + 1] = higher;
                result[i] = lower;
                hasSwap = true;
            }
        }

        if (!hasSwap) break;
    }

    return result;
}

module.exports = bubbleSort;