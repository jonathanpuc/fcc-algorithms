// Task: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    // first replace any underscores or spaces with dash
    // two capturing groups. match lower case letter and uppercase, return same group but with dash between.
    return str.replace(/[\s_]/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

spinalCase("AllThe-small Things");