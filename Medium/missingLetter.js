/*
What's the Missing Letter?
Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter".

Examples
missingLetter("abdefg") ➞ "c"

missingLetter("mnopqs") ➞ "r"

missingLetter("tuvxyz") ➞ "w"

missingLetter("ghijklmno") ➞ "No Missing Letter"
Notes
The given string will never have more than one missing letter.
*/

function missingLetter( letters) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerLetters = letters.toLowerCase();
  const startIndex = alphabet.indexOf(lowerLetters[0]);
  const endIndex = alphabet.indexOf(lowerLetters[lowerLetters.length -1]);
  const missing = alphabet.slice(startIndex, endIndex+1).split('').find(letter => !lowerLetters.includes(letter));
  return missing ? missing : "No Missing Letter";
}

exports.solution = missingLetter;