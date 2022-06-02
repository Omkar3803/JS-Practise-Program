function factorial_nr(num) {
    if (num == 0 || num == 1) return 1;   // 0! = 1 and 1! = 1
    fact = num;
    for (i = 2; i <= (num - 1); i++) {
        fact = fact * i;
        console.log("Executing for i = ", i, " and fact = ", fact)
    }
    return fact
}

console.log(factorial_nr(0));  // 0! = 1
console.log(factorial_nr(1));  // 1! = 1
console.log(factorial_nr(5));  // 5! = 1 * 2 * 3 * 4 * 5 = 120
console.log(factorial_nr(7));  // 5! = 1 * 2 * 3 * 4 * 5 = 720 * 7 = 5040