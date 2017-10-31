/* Task: 
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays. */

function diffArray(arr1, arr2) {

    return arr1.concat(arr2).filter(word => {
        return !arr1.includes(word) || !arr2.includes(word);
    });

}

diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]);

/** First solution */
//   var newArr1 = [];
//   var newArr2 = [];
//   newArr1 = arr1.filter(word => {
//     if (arr2.indexOf(word) === -1) {
//       return word;
//     }
//   });

//   newArr2 = arr2.filter(word => {
//     if (arr1.indexOf(word) === -1) {
//       return word;
//     }
//   });

//   var finalArray = newArr1.concat(newArr2);
//   // Same, same; but different.
//   return finalArray;