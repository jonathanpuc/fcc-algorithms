/* Task: One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
 In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string. */

function rot13(str) {
    // split string into characters
    const stringArr = str.split('');
    let finalArr = [];

    /* iterate over each character, grabbing its code,
        deciphering and returning deciphered char to array */
    finalArr = stringArr.map(char => {
        // grab uni code
        let code = char.charCodeAt(0);
        // character is in non-alphabetic return as is
        if (code < 65 || code > 90) {
            return char;
        } else if (code < 78) {
            // shift character code 13 forward
            return String.fromCharCode(code + 13);
        } else {
            // shift character code 13 backward
            return String.fromCharCode(code - 13);
        }
        // join array back into string
    }).join('');

    return finalArr;
}

rot13("SERR CVMMN!");