/* Task: Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays. */

function largestOfFour(arr) {
    let largestArr = [];

    // iterate through given array
    arr.forEach(arr => {
        // iterate through each sub array, returning largest num to variable
        let highestNum = arr.reduce((a, b) => Math.max(a, b));
        // pushing highest num to results array
        largestArr.push(highestNum);
    });

    return largestArr;
}



largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);