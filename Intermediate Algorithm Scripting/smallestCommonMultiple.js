// noprotect

// function to sort integers correctly
function sortNumber(a, b) {
    return a - b;
}

function smallestCommons(arr) {
	// sort array from lowest to highest
    arr = arr.sort(sortNumber);
    // empty array for range of numbers
    var array = [];
    // begin for loop at lowest value until highest value
    for (var i = arr[0]; i <= arr[arr.length - 1]; i++) {
    	// push number into array
        array.push(i);
    }

    // while loop variable
    var x = true;
    // lowest common multiple
    var LCM = 0;

    while (x) {
        LCM++;
        for (var j = array[0]; j <= array[array.length - 1]; j++) {
        	// if current lcm does not return, there is a better lcm
            if (LCM % j !== 0) {
            	// end for loop
                break;
                // when reach end of array, has passed lcm test
            } else if (j === array[array.length - 1]) {
            	// break while loop
                x = false;
            }
        }
    }
    return LCM;
}


smallestCommons([23, 18]);