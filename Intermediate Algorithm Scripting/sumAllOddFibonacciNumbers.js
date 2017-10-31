/* Task: Given a positive integer num, return the sum of all odd Fibonacci numbers
that are less than or equal to num. */

function sumFibs(num) {
    let fibSum = 0;
    // fib sequence always starts 1
    let n = 1;
    let m = 0;
    debugger;
    while (n <= num) {
        // destructuring
        // n is equal to n + m
        // m is always equal to previous n
        [n, m] = [n + m, n];

        // if m is odd
        if (m % 2 !== 0) {
            // add to sum
            fibSum += m;
        }
    }
    return fibSum;
}

sumFibs(10);