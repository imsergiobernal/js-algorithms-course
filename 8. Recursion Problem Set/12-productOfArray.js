/**
 * Write a funciton which tackes in an array of numbers and returns the product of them all.
 * @param {number[]} array 
 */
function productOfArray(array) {
    if (array.length === 0) return 1;
    return array[0] * productOfArray(array.splice(1));
}

console.log(productOfArray([1,2,3])); // 6
console.log(productOfArray([1,2,3,10])); // 60