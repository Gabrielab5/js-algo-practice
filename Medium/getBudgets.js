/*
Create the function that takes an array with objects and returns the sum of people's budgets.

Examples
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
]) ➞ 62600
*/

function getBudgets(ObjArray ) {
  const budgetArr = ObjArray.map(obj => obj.budget);
  return budgetArr.reduce((acc, val) => acc + val, 0);
}

exports.solution = getBudgets;