/* Task: Return the factorial of the provided integer. */

function factorialize(num) {
    let factorialized = 1;

    // iterate over num
    while (num > 0) {
        // multiplying factorialized by current num
        factorialized *= num;
        // decreasing value
        num--;
    }
    return factorialized;
}

factorialize(5);