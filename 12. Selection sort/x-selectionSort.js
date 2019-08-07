/**
 * Selection sort algorithm. Iterate over all numbers, find the lowest value and store his position.
 * At the end of the iteration, swap the lowest value found with the first one.
 * The main difference with Bubble sort is that Selection sort does lower swaps.
 * @param {*} array
 * @returns {number[]}
 */
function selectionSort(array) {
    let result = Array.from(array);
    let min = {
        value: undefined,
        position: undefined
    };

    for (let iteration = 0; iteration < result.length; iteration++) {
        min.value = result[iteration];
        min.position = iteration;

        for (let i = iteration+1; i < result.length; i++) {
            if (result[i] < min.value) {
                min.value = result[i];
                min.position = i;
            }

            if (i === result.length - 1) {
                let [lowest, valueToSwap] = [min, result[iteration]];
                result[iteration] = min.value;
                result[lowest.position] = valueToSwap;
            }
        }
    }

    return result;
}

module.exports = selectionSort;