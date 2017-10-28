/* Task: Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself.
 or example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime. */

function sumPrimes(num) {
  var range = [];

  for (var i = 2; i <= num; i++) {
    // if true
    if (isPrimeNumber(i)) {
      // push to range array
      range.push(i);
    }
  }
  // return array sumed with reduce method
  return range.reduce((a, b) => a + b);

}

function isPrimeNumber(num) {

  for (var x = 2; x < num; x++) {
    // if any other number other than 1 or itself
    // can be a divisor, not a prime number, return false.
    if (num % x === 0) {
      return false;
    }
  }
  // is a prime number
  return true;
}
sumPrimes(10);
