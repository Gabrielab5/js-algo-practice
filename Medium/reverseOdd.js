/*
Reverse the Odd Length Words
Given a string, reverse all the words which have odd length. The even length words are not changed.

Examples
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
Notes
There is exactly one space between each word and no punctuation is used.
*/

function reverseOdd(sentence) {
  const words = sentence.split(' ')
  let newSentence =[]
  words.forEach(word => {
    if (word.length%2) newSentence.push(reverseString(word))
      else newSentence.push(word)
  });
  return newSentence.join(' ')
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

exports.solution = reverseOdd;