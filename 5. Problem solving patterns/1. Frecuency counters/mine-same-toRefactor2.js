/**
 * If the second array has the same first array squared values and with the same frecuency,
 * return true. This is the same function but with native for.
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
    let arr1CurrNumber = arr1[i]
    let correctIndex = -1;
    for (i2 = 0; i2 < arr2.length; i2++) {
      if (arr2[i2] !== arr1CurrNumber ** 2) continue
      correctIndex = i2
      i2 = arr2.length // End the loop
    }
    if (correctIndex === -1) return false
    arr2.splice(correctIndex, 1)
  }

  return true
}


console.log('true', same([2,2,1,3,4], [1,4,4,9,16])) // True

console.log('false', same([1,2,3,4], [1,4,4,9,16])) // False

console.log('false', same([1,2,2,3,4], [1,1,4,9,16])) // False