/* Task: You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of the
same value as these arguments. */

function destroyer(arr) {
	// assign argument elements into arrays
    var [tempArr, ...targets] = arguments;
    var finalArr = [];
    // iterate over search and destroy array
    for (var i = 0; i < tempArr.length; i++) {
    	// if current element is not present in targets
        if (targets.indexOf(tempArr[i]) === -1) {
        	// push that element into a new array
            finalArr.push(tempArr[i]);
        }
    }

    return finalArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

