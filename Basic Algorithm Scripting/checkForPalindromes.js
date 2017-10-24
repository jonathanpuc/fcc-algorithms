/* Task: Return true if given string is a palindrome. Otherwise return false. */

function palindrome(str) {
  
  // remove all non-alphanumeric chars
  str = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  // create temp variable to compare
  let tmp = str;
  // reverse temp variable
  tmp = tmp.split('').reverse().join('');
  
  // compare to see if palindrome match
  return tmp === str ? true : false;
}

palindrome("A man, a plan, a canal. Panama");
