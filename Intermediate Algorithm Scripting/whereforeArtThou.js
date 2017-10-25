/* Task: Make a function that looks through an array of objects (first argument)
and returns an array of all objects that have matching property and value pairs (second argument).
Each property and value pair of the source object has to be present in the object from the collection
if it is to be included in the returned array.*/

function whatIsInAName(collection, source) {
    // save keys into array to use as an index
    const sourceKeys = Object.keys(source);
    // filter out objects in collection
    return collection.filter(obj => {
        // iterate through each object
        for (var i = 0; i < sourceKeys.length; i++) {
            // if the object does not have the key OR
            // the partciular key's value does not equal to the sourceKeys value
            if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
                // return false to filter out
                return false;
            }
        }
        // if passes previous stage, is a match. So keep.
        return true;
    });
}

whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});