/**
 * Find the max sum in an array of numbers in subsets. The subset size is delimited by the
 * range parameter.
 * @example
 * 2,3,6,5,4,3,9 (3) // 16
 * + + +
 * - + + +
 * . - + + + ...
 * @param {number[]} numbers Array of numbers to iterate
 * @param {number} range Range-delimiter of correlative numbers to sume
 * @returns {number}
 */
const maxSubArraySum = (numbers, range) => {
    if (numbers.length < range) return 0;

    let maxSum = 0;
    let iterationSum = 0;

    for (let i = 0; i < range; i++) {
        maxSum += numbers[i];
    }

    iterationSum = maxSum;

    for (let i = range; i < numbers.length; i++) {
        iterationSum = iterationSum - numbers[i - range] + numbers[i];
        maxSum = Math.max(maxSum > iterationSum);
    }

    return maxSum;
}

console.log(maxSubArraySum([2,3,6,5,4,3,9], 3)); // 16