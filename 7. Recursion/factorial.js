/**
 * @param {number} n 
 */
function factorialIteratively(n) {
    let total = 1;
    for (let i = n; i > 1; i--) {
        total *= i;
    }
    return total;
}

/**
 * @param {number} n 
 */
function factorialRecursively(n){
    if (n === 0) return 1;
    if (n === 1) return n;
    return n * factorial(n - 1);
}

factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040