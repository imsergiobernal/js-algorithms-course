/**
 * Write a recursive function which accepts a number and returns the nth number in the Fibonacci
 * sequence. Recall the Fibonacci sequence is the secuence of whole numbers 1, 1, 2, 3, 5, 8...
 * which stats with 1 and 1, and where every number thereafther is equal to the sum of the previous
 * two numbers.
 * @param {number} n 
 */
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
