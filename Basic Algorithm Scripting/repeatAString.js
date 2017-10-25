/* Task: Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number. */

function repeatStringNumTimes(str, num) {
    let repeatedWord = '';

    if (num > 0) {
        while (num !== 0) {
            // append str and repeat for value of num
            repeatedWord += str;
            num--;
        }
        return repeatedWord;
    }
    // num is a negative
    return "";
}

repeatStringNumTimes("abc", 3);
