/* Task: Return the length of the longest word in the provided sentence. */

function findLongestWord(str) {
    // break down string into array of its words
    let wordsArr = str.split(' ');
    // intialize longest length to compare
    let longestRecord = wordsArr[0].length;
    // iterate through each word
    wordsArr.forEach(word => {
        if (word.length > longestRecord) {
            // re-assign longest length to current word length
            longestRecord = word.length;
        }
    });

    return longestRecord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");