/* Task: Convert the given number into a roman numeral. */

function convertToRoman(num) {
    // array of possible roman numerals up to 1000
    const roman_nums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    // array of possible number values
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    // string to attach roman nums
    var roman = '';
    // iterate for a length of numbers array
    for (var i = 0; i < numbers.length; i++) {
        // while num arg is larger than ith element in numbers array
        while (num >= numbers[i]) {
            // add its equivalent roman num to roman string
            roman += roman_nums[i];
            // subtract value to end while loop
            num -= numbers[i];
        }
    }
    return roman;
}

convertToRoman(9);