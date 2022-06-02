function factorial_r(num) {
    if (num == 0 || num == 1) return 1;   // Base Case, pre-known case, simplified version
    // return num * factorial_r(num - 1)  // Recursive Case - Direct
    return num * fact_cal(num - 1)        // Recursive Case - Indirect
}

function fact_cal(n) {
    return factorial_r(n)
}

console.log(factorial_r(0));  // 0! = 1
console.log(factorial_r(1));  // 1! = 1
console.log(factorial_r(5));  // 5! = 1 * 2 * 3 * 4 * 5 = 120
console.log(factorial_r(7));  // 5! = 1 * 2 * 3 * 4 * 5 = 720 * 7 = 5040