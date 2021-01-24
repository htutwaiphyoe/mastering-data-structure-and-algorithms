function fibonacci(n) {
    if (n <= 0) return "The length of Fibonacci series is at least 1";
    if (n === 1 || n === 2) return n - 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
