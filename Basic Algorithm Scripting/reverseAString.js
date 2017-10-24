/* Task: Reverse the provided string. */

function reverseString(str) {
    // split string into array to reverse elements and join back to string
    return str.split('').reverse().join('');
}

reverseString("hello");