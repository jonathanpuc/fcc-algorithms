/* Task: Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog" */

function myReplace(str, before, after) {
    // mutate string into an array and loop through each word
    return str.split(' ').map(word => {
        // if the current word matches with the word we aim to change
        if (word === before) {
            // if the word is titlecased
            if (word.charAt(0) === word.charAt(0).toUpperCase()) {
                // split the replacement into an array
                after = after.split('');
                // separating the first character from the rest
                var [titleCased, ...rest] = after;
                // transforming char to uppercase
                titleCased = titleCased.toUpperCase();
                // returning it with the rest of the word appended
                return titleCased + rest.join('');
            }
            // word is not titlecased so just replace it as normal
            return after;
            // is not the word we are looking for, return it and move on to next
        } else {
            return word;
        }
        // mutate back from array to string
    }).join(' ');
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");