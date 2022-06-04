// find the n-th fibonacci number in the series
// fibonacci numbers: 0  1  1  2  3  5  8 13 21
//      index values: 0  1  2  3  4  5  6  7  8
function fibo(n) {
    // base case: we return the number n
    if (n <= 1) return n
    // recursive case
    return fibo(n - 1) + fibo(n - 2)
}

console.log(fibo(5))
console.log(fibo(8))