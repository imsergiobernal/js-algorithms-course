/**
 * If the second array has the same first array squared values and with the same frecuency,
 * return true.
 * @example
 *  same([2,2,1,3,4], [1,4,4,9,16])) // True
 *  same([1,2,3,4], [1,4,4,9,16])) // False
 *  same([1,2,2,3,4], [1,1,4,9,16])) // False
 * @param {Number[]} arr1
 * @param {Number[]} arr2
 * @return {Boolean}
 */
const same = (arr1, arr2) => {
  const frecuencies = {
    arr1: {},
    arr2: {}
  }

  for (let val of arr1) {
    if (!frecuencies.arr1[val]) frecuencies.arr1[val] = 0
    frecuencies.arr1[val] += 1
  }

  for (let val of arr2) {
    if (!frecuencies.arr2[val]) frecuencies.arr2[val] = 0;
    frecuencies.arr2[val] += 1
  }

  for (let key in frecuencies.arr1) {
    if (!(key ** 2 in frecuencies.arr2)) return false
    if (frecuencies.arr1[key] !== frecuencies.arr2[key ** 2]) return false
  }

  return true;
}

console.log('true', same([2,2,1,3,4], [1,4,4,9,16])) // True
console.log('false', same([1,2,3,4], [1,4,4,9,16])) // False
console.log('false', same([1,2,2,3,4], [1,1,4,9,16])) // False
