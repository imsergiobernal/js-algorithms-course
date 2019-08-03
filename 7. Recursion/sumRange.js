/**
 * @example
 * (10 + 9) + (10 + 8) + (10 + 7) ... = 55 
 * @param {number} number
 * @returns {number}
 */
const sumRange = (number) => {
    if (number === 1 ) return 1;
    return number + sumRange(number - 1);
}

console.log(sumRange(10));