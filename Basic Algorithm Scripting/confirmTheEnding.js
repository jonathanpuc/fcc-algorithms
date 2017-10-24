/* Task: Check if a string (first argument, str) ends with the given target string (second argument, target). */


function confirmEnding(str, target) {
    // clean up string 
    str = str.trim();
    // if string contains multiple words string
    if (str.includes(' ')) {
        // split into array of words
        str = str.split(' ');
        // check if last word in array ends with target using regex
        return str.pop().match(`${target}$`) ? true : false;
    } else {
        // split into array of letters
        str = str.split('');
        // see if last letter is equal to the target
        return str.pop() === target ? true : false;
    }

}

confirmEnding("The mad hatter", "hat");