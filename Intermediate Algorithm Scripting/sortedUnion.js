/* Task: Write a function that takes two or more arrays and returns a
new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included
in their original order, but with no duplicates in the final array. */

function uniteUnique(arr) {
    // destructure arguments into a single array
    return [...arguments].reduce((a, b) => {
        // flatten the array by concatting arrays
        return a.concat(b);
        // with the flat array, filter out duplicates
    }, []).filter((item, pos, thisArg) => thisArg.indexOf(item) == pos);
}

uniteUnique([1, 3, 2], [5, 2, 1, [4]], [2, 1]);