/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed( string ) {
  const vowels = 'aeiouAEIOU'
  let result =''
  for(let ch of string){
    if (vowels.includes(ch))
      result += ('-'+ ch + '-')
    else
      result += ch
  }
  return result
}

exports.solution = dashed;