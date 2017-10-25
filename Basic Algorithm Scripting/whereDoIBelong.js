/* Task: Return the lowest index at which a value (second argument) 
should be inserted into an array (first argument) once it has been sorted. The returned value should be a number. */

// function to sort integers correctly
function sortNumber(a, b) {
    return a - b;
}

function getIndexToIns(arr, num) {
  const target = num;
  arr.push(num);
  arr.sort(sortNumber);

  for (var i in arr) {
    // if the current element matches target
    if (arr[i] === target) {
      // return the index as a number
      return parseInt(i);
    } 
  }
}

getIndexToIns([2, 20, 10], 19);