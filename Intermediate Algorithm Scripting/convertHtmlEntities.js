/* Task: Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities. */

function convertHTML(str) {
    /* use replace method with regex and function that uses a
       ternary operator and returns the according html entity*/
    return str.replace(/[&<>"']/g, v =>
        // chain ternary to until right match
        v == "&" ?
        "&amp;" :
        v == "<" ?
        "&lt;" :
        v == ">" ?
        "&gt;" :
        v == '"' ?
        "&quot;" :
        "&apos;");
}

convertHTML("Dolce & Gabbana");