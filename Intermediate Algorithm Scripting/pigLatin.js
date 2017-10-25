/* Task: Translate the provided string to pig latin. */

function translatePigLatin(str) {
    // index to check for vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // first character is a vowel
    if (vowels.indexOf(str.charAt(0)) !== -1) {
        // return string with 'way' at the end
        return str + 'way';
        // consonant cluster at the start of string
    } else if (vowels.indexOf(str.charAt(0)) === -1 && vowels.indexOf(str.charAt(1)) === -1) {
        // grab the the clusters and append 'ay' at the end
        let end = `${str.slice(0,2)}ay`;
        // return the string without consonant cluster and append the end 
        return str.slice(2) + end;
        // vowel is not the first character and not a consonant cluster
    } else {
        // repeat previous block this time working only on first char
        let end = `${str.slice(0,1)}ay`;
        return str.slice(1) + end;
    }
}

translatePigLatin("glove");