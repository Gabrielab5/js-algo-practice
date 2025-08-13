/*
Return the coordinates ([row, col]) of the element that differs from the rest.

Examples
whereIsWaldo([
 ["A", "A", "A"],
 ["A", "A", "A"],
 ["A", "B", "A"]
]) ➞ [ 2, 1]

whereIsWaldo([
 ["c", "c", "c", "c"],
 ["c", "c", "c", "d"]
]) ➞ [1, 3]

whereIsWaldo([
 ["O", "O", "O", "O"],
 ["O", "O", "O", "O"],
 ["O", "O", "O", "O"],
 ["O", "O", "O", "O"],
 ["P", "O", "O", "O"],
 ["O", "O", "O", "O"]
]) ➞ [4, 0]
Notes
Rows and columns are 0-indexed.
*/

function whereIsWaldo(matrix) {
  const counts = new Map();
  for (const row of matrix) {
    for (const element of row) {
      counts.set(element, (counts.get(element) || 0) + 1);
    }
  }
  let waldo = null;
  for (const [element, count] of counts.entries()) {
    if (count === 1) {
      waldo = element;
      break;
    }
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === waldo) {
        return [row, col];
      }
    }
  }
}

exports.solution = whereIsWaldo;
