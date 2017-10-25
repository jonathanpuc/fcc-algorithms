/* Task: Truncate a string (first argument) if it is longer than the given maximum string length
(second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3,
then the addition of the three dots does not add to the string length in determining
the truncated string. */

function truncateString(str, num) {
  var temp = '';
  var truncate = [];
  // string is longer than num
  if (str.length > num && num > 3) {
      // grab only chars from string up to num position
      temp = str.slice(0,num);
      // turn into array, remove last 3 chars, turn back to string
      truncate = temp.split('').splice(0, temp.length-3).join('');
      // add ending to truncate
      truncate += '...';
      return truncate;
  }
  // string length is same as num or is less than
  // no need to truncate
  else if (str.length === num || num > str.length) {
      return str;
  }
  // num is less than 3
  else {
      temp = str.slice(0,num);
      temp += '...';
      return temp;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
