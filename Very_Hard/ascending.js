/*
Write a function that returns true if a string consists of ascending or ascending AND consecutive numbers.

Examples
ascending("232425") ➞ true
// Consecutive numbers 23, 24, 25

ascending("2324256") ➞ false
// No matter how this string is divided, the numbers are not consecutive.

ascending("444445") ➞ true
// Consecutive numbers 444 and 445.
Notes
A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
*/

function ascending(number) {
    for (let i = 1; i <= Math.floor(number.length / 2); i++) {
        const firstNum = parseInt(number.slice(0, i));
        let expectedNum = firstNum + 1;
        let currentString = number.slice(i);
        
        while (currentString.length > 0) {
            const numStr = expectedNum.toString();
            if (currentString.startsWith(numStr)) {
                currentString = currentString.slice(numStr.length);
                expectedNum++;
            } else 
                break;            
        }        
        if (currentString.length === 0) return true;        
    }    
    return false;
}

exports.solution = ascending;