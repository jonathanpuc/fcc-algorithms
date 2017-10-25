/* Task: Check if a value is classified as a boolean primitive. Return true or false. */

function booWho(bool) {
  if (bool === false || bool === true) {
    return true;
  }
  if (bool !== false && bool !== true) {
    return false;
  }
}

booWho(false);
