const { performance } = require('perf_hooks');

/**
 * O(n) linear operations
 * @param {number} n 
 */
function addUpto(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

/**
 * O(1) constant operation
 * @param {number} n 
 */
function addUpToMath(n) {
  return n * (n + 1) / 2;
}

let t1 = performance.now();
console.log(addUpto(10000000000));  // O(n) 13 seconds
console.log(addUpToMath(10000000000)); // O(1) 0.00303 seconds
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
