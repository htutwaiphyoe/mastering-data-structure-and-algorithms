function factorial(n) {
    if (n < 0) {
        return "Factorial can't be found on negative integers";
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(10));
