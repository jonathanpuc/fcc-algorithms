/* Task: Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has been sorted. The returned value should be a number. */

function getIndexToIns(arr, num) {
    const target = num;
    // push number
    arr.push(num);
    // sort integers numerically
    arr.sort(sortNumber);
    // iterate through array
    for (var i = 0; i < arr.length; i++) {
        // if current element matches up with number
        if (arr[i] === num) {
            // return the index
            return i;
        }
    }
}

// function to sort integers correctly
function sortNumber(a, b) {
    return a - b;
}

// /* My initial solution, gives correct answer but wont pass as correct. */
// function getIndexToIns(arr, num) {
//   const target = num;
//   arr.push(num);
//   arr.sort(sortNumber);

//   for (var i in arr) {
//     if (arr[i] === target) {
//       return i;
//     } 
//   }
// }

getIndexToIns([2, 20, 10], 19);