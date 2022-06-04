function gcd_r(num1, num2) {
    if (num1 === num2) return num1    // base case or known case
    if (num1 > num2)
        return gcd_r(num1 - num2, num2)
    else
        return gcd_r(num1, num2 - num1);
}

console.log(gcd_r(150, 175))