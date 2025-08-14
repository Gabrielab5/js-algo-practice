/*
Write a function to replace all instances of character c1 with character c2 and vice versa.

Examples
doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

doubleSwap("random w#rds writt&n h&r&", "#", "&")
➞ "random w&rds writt#n h#r#"

doubleSwap("128 895 556 788 999", "8", "9")
➞ "129 985 556 799 888"
Notes
Both characters will show up at least once in the string.
*/

function doubleSwap(string, prevCh, newCh) {
  const charArr = string.split('').map((char)=> char===prevCh ? newCh : char==newCh ? prevCh : char)
  return charArr.join('')
}

exports.solution = doubleSwap;