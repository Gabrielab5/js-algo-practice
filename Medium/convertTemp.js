/*
Create a function that converts Celcius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
*/

function convertTemp( temp ) {
    const celsiusMatch = temp.match(/^(-?\d+)(°C)$/);
  const fahrenheitMatch = temp.match(/^(-?\d+)(°F)$/);

  if (celsiusMatch) {
    const celsius = parseInt(celsiusMatch[1], 10);
    const fahrenheit = Math.round((celsius * 9/5) + 32);
    return `${fahrenheit}°F`;
  } else if (fahrenheitMatch) {
    const fahrenheit = parseInt(fahrenheitMatch[1], 10);
    const celsius = Math.round((fahrenheit - 32) * 5/9);
    return `${celsius}°C`;
  } else {
    return "Error";
  }
}

exports.solution = convert;