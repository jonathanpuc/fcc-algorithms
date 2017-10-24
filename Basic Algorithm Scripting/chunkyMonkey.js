/* Task: Write a function that splits an array (first argument) into groups the length of size
(second argument) and returns them as a two-dimensional array. */

function chunkArrayInGroups(arr, size) {
    var holderArray = [];

    while (arr.length) {
        // continously push elements within array
        // from 0 index to size index to holderArray
        holderArray.push(arr.splice(0, size));
    }
    return holderArray;

}

chunkArrayInGroups([0, 1, 2], 2);
