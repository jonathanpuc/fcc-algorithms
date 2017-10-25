/* Task:
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
  // variable to use as unicode index and compare.
  var compare = str.charCodeAt(0),
    missing;
  // split string into array of chars to iterate over
  str.split('').map((letter, idx) => {
    // current char uni code matches up to compare
    if (str.charCodeAt(idx) === compare) {
      // increase compare to next unicode
      compare++;
      // current char unicode does not match up
    } else {
      // assign according unicode char from compare index
      missing = String.fromCharCode(compare);
    }
  });
  return missing;
}

fearNotLetter("abcefg");
