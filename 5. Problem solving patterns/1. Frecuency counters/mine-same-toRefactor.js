/**
 * If the second array has the same first array squared values and with the same frecuency,
 * return true.
 * @example
 *  same([2,2,1,3,4], [1,4,4,9,16])) // True
 *  same([1,2,3,4], [1,4,4,9,16])) // False
 *  same([1,2,2,3,4], [1,1,4,9,16])) // False
 * @param {Number[]} arr1 
 * @param {Number[]} arr2 
 * @returns {Boolean}
 */
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false

  for (i = 0; i <= arr1.length-1; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false
    arr2.splice(correctIndex, 1)
  }

  return true
}


console.log('true', same([2,2,1,3,4], [1,4,4,9,16])) // True

console.log('false', same([1,2,3,4], [1,4,4,9,16])) // False

console.log('false', same([1,2,2,3,4], [1,1,4,9,16])) // False