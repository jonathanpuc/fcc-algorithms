/* Task: 
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/

function sumAll(arr) {
    let sum = 0;
    // sort array from min to max
    const sort = arr.sort((a, b) => {
        return a - b;
    });

    let start = sort[0];
    let end = sort[1];
    // repeatedly for value of end, add numbers in range to sum
    for (var i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

sumAll([4, 1]);