/* Task: Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case. */

function titleCase(str) {
    // split str into array with lowercased words
    // map that array which returns a word with first letter capitalized
    // store all words into titleCased array
    let titleCased = str.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // turn array back into string
    return titleCased.join(' ');
}

titleCase("I'm a little tea pot");