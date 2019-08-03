/**
 * Checks if two numbers have the same frecuency of digits, using Frecuency Pattern strategy.
 * @param {number} num1 
 * @param {number} num2 
 * @returns {boolean}
 */
const sameFrequency = (num1, num2) => {
    const num1str = num1.toString(10);
    const num2str = num2.toString(10);

    if (num1str.length !== num2str.length) return false;

    const frecuencies = new Map([
        ['0', 0],
        ['1', 0],
        ['2', 0],
        ['3', 0],
        ['4', 0],
        ['5', 0],
        ['6', 0],
        ['7', 0],
        ['8', 0],
        ['9', 0]
    ]);

    for (let i = 0; i < num1str.length; i++) {
        frecuencies.set(num1str[i], frecuencies.get(num1str[i]) + 1);
        frecuencies.set(num2str[i], frecuencies.get(num2str[i]) - 1);
    }

    for (const [number, freq] of frecuencies) {
        if (freq !== 0) return false;
    }

    return true;
}

console.log(sameFrequency(123456, 123456)); // true
console.log(sameFrequency(213564, 135462)); // true
console.log(sameFrequency(2135642, 135462)); // false
console.log(sameFrequency(213564, 1354622)); // false
console.log(sameFrequency(213574, 135462)); // false