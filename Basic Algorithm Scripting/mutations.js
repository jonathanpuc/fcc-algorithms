/* Task: Return true if the string in the first element of the array contains all of the letters of the string
in the second element of the array. */

function mutation(arr) {
    const s1 = arr[0].toLowerCase();
    const s2 = arr[1].toLowerCase();
    // keep track of each time letter in second string is in first string
    var hits = 0;

    for (var i = 0; i < s2.length; i++) {
        // check if string contains nth char in second string
        if (s1.indexOf(s2[i]) !== -1) {
            hits++;
        }
    }

    return hits === s2.length ? true : false;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "aqRsTu"]);