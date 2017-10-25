/* Task: Remove all falsy values from an array. */

function bouncer(arr) {
    var temp = [];
    // filter, where will only return elements that are truthy with callback function
    temp = arr.filter(removeFalseVar);

    return temp;
}

// function that returns the boolean type
function removeFalseVar(value) {
    return Boolean(value);
}

bouncer([false, null, 0, NaN, undefined, ""]);


