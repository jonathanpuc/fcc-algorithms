/* Task: The DNA strand is missing the pairing element. Take each character,
get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array. */

function pairElement(str) {

  return str.split('').map(letter => {
    switch (letter) {
      case 'A':
        return [letter, 'T'];
        break;
      case 'T':
        return [letter, 'A'];
      case 'C':
        return [letter, 'G'];
      case 'G':
        return [letter, 'C'];
    }
  });
}

pairElement("TTGACG");
